"use client";
import { FC, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RippleButton from "@/components/ui/Button";
import Image from "next/image";

interface ServiceProvider {
  name: string;
  role: string;
  avatar: string;
}

interface OrderBy {
  name: string;
  role: string;
  avatar: string;
}

interface MockOrder {
  serviceProvider: ServiceProvider;
  orderBy: OrderBy;
  reviews: number;
  image: string;
}

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

interface PaymentFailedModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onResendRequest: () => void;
}

const PaymentFailedModal: FC<PaymentFailedModalProps> = ({
  isOpen,
  onClose,
  amount,
  onResendRequest,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const transactionId = "we345tyu7888889";
  const date = "7 May, 2025";
  const time = "5:20:59 PM";
  const paymentMethod = "M-PESA Payment";

  const handleBackToServices = () => {
    router.push("/service-providers");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#FEE2E2] flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-[#EF4444] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-[#EF4444] text-[20px] leading-[24px] font-semibold mb-1">
          Payment Failed
        </h2>
        <p className="text-[#64748B] text-[14px] leading-[20px] mb-6">
          Oops! Something went wrong with your Payment.
        </p>

        <div className="w-full space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Transaction ID
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {transactionId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Date
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {date}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Time
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {time}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Payment Method
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {paymentMethod}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Amount Paid
            </span>
            <span className="text-[#EF4444] text-[14px] leading-[20px] font-medium">
              $ {amount.toFixed(1)} (Failed)
            </span>
          </div>
        </div>

        <div className="w-full space-y-3">
          <button
            onClick={onResendRequest}
            className="w-full py-3 border border-[#E8ECF4] rounded-lg text-[#252525] text-[16px] leading-[20px] font-medium"
          >
            Resend Payment Request
          </button>
          <button
            onClick={handleBackToServices}
            className="w-full py-3 bg-[#3A96AF] text-white rounded-lg text-[16px] leading-[20px] font-medium"
          >
            Back to Services
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentSuccessModal: FC<PaymentSuccessModalProps> = ({
  isOpen,
  onClose,
  amount,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const transactionId = "we345tyu7888889";
  const date = "7 May, 2023";
  const time = "5:20:59 PM";
  const paymentMethod = "M-PESA Payment";

  const handleViewDetails = () => {
    // Handle view details action
    console.log("View details clicked");
  };

  const handleBackToServices = () => {
    router.push("/service-providers");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-[#10B981] text-[20px] leading-[24px] font-semibold mb-1">
          Payment Successful
        </h2>
        <p className="text-[#64748B] text-[14px] leading-[20px] mb-6">
          Your payment has been done successfully
        </p>

        <div className="w-full space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Transaction ID
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {transactionId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Date
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {date}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Time
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {time}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Payment Method
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              {paymentMethod}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B] text-[14px] leading-[20px]">
              Amount Paid
            </span>
            <span className="text-[#252525] text-[14px] leading-[20px] font-medium">
              $ {amount.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="w-full space-y-3">
          <button
            onClick={handleViewDetails}
            className="w-full py-3 border border-[#E8ECF4] rounded-lg text-[#252525] text-[16px] leading-[20px] font-medium"
          >
            View Details
          </button>
          <button
            onClick={handleBackToServices}
            className="w-full py-3 bg-[#3A96AF] text-white rounded-lg text-[16px] leading-[20px] font-medium"
          >
            Back to Services
          </button>
        </div>
      </div>
    </div>
  );
};

const mockOrder: MockOrder = {
  serviceProvider: {
    name: "Amy Watson",
    role: "Certified Career Coach",
    avatar: "/assets/profile.svg",
  },
  orderBy: {
    name: "John Doe",
    role: "Customer",
    avatar: "/assets/profile.svg",
  },
  reviews: 288,
  image: "/assets/card-image.png",
};

const Payment: FC = () => {
  const searchParams = useSearchParams();
  const price = Number(searchParams.get("price")) || 0;
  const quantity = Number(searchParams.get("quantity")) || 1;
  const title = searchParams.get("title") || "Service";
  const total = price * quantity;
  const [selectedPayment, setSelectedPayment] = useState<"card" | "mpesa">(
    "card"
  );
  const [phoneNumber, setPhoneNumber] = useState<string>("923456******");
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showFailedModal, setShowFailedModal] = useState<boolean>(false);

  const handleProceedPayment = () => {
    // In a real app, we would process the payment here
    // For demo purposes, randomly show success or failure
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      setShowSuccessModal(true);
    } else {
      setShowFailedModal(true);
    }
  };

  const handleResendPaymentRequest = () => {
    setShowFailedModal(false);
    // In a real app, we would resend the payment request here
    console.log("Resending payment request...");
    // For demo purposes, show success after resend
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 1000);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full px-5 md:px-8">
        <div className="max-w-[1280px] w-full mx-auto pt-6 pb-20">
          <div>
            <h1 className="text-[#252525] text-[24px] font-semibold leading-[31px] mb-3">
              Payment Method
            </h1>
            <h3 className="text-[#252525] text-[20px] leading-[26px] font-normal">
              Select your payment method
            </h3>
          </div>
          <div className="mt-6 flex items-start justify-between gap-6">
            {/* Card Method */}
            <div className="max-w-[709px] w-full flex flex-col gap-6">
              <div
                className={`border ${
                  selectedPayment === "card"
                    ? "border-[#3A96AF]"
                    : "border-[#E8ECF4]"
                } rounded-lg p-5 cursor-pointer`}
                onClick={() => setSelectedPayment("card")}
              >
                <div className="flex items-end gap-4">
                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#F5F9FC] rounded-full">
                      <Image
                        src="/assets/icons/card.svg"
                        alt="Card"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-[20px] leading-[20px] font-semibold text-[#252525]">
                        Card Payment
                      </h3>
                      <p className="text-[14px] leading-[20px] text-[#64748B]">
                        Do the payment through your Bank card
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/icons/visa.svg"
                      alt="Visa"
                      width={40}
                      height={27}
                      className="object-contain"
                    />
                    <Image
                      src="/assets/icons/stripe.svg"
                      alt="Stripe"
                      width={40}
                      height={27}
                      className="object-contain"
                    />
                    <Image
                      src="/assets/icons/paypal.svg"
                      alt="PayPal"
                      width={40}
                      height={27}
                      className="object-contain"
                    />
                    <Image
                      src="/assets/icons/mastercard.svg"
                      alt="Mastercard"
                      width={40}
                      height={27}
                      className="object-contain"
                    />
                    <Image
                      src="/assets/icons/gpay.svg"
                      alt="Google Pay"
                      width={40}
                      height={27}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`border ${
                  selectedPayment === "mpesa"
                    ? "border-[#3A96AF]"
                    : "border-[#E8ECF4]"
                } rounded-lg p-5 cursor-pointer`}
                onClick={() => setSelectedPayment("mpesa")}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/assets/icons/mpesa.png"
                      alt="M-Pesa"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[20px] leading-[20px] font-semibold text-[#252525]">
                      M-Pesa Payment
                    </h3>
                    <p className="text-[14px] leading-[20px] text-[#64748B]">
                      Do the payment through your Bank card
                    </p>
                  </div>
                </div>

                {selectedPayment === "mpesa" && (
                  <div className="mt-8 border-t border-[#E8ECF4] pt-6">
                    <p className="text-[16px] leading-[24px] font-medium text-[#252525] mb-4">
                      A Payment prompt has been sent to your Phone Number
                    </p>

                    <div className="flex items-center gap-3 bg-[#F8FAFC] p-4 rounded-lg mb-6">
                      <div>
                        <Image
                          src="/assets/icons/call.svg"
                          alt="Phone"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[16px] leading-[20px] font-medium text-[#252525]">
                        {phoneNumber}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 ">
                          <Image
                            src="/assets/icons/tag-right.svg"
                            alt="Phone"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-[14px] leading-[20px] text-[#252525]">
                          Your screen will be light up requesting you to enter
                          your M-PESA PIN
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <Image
                            src="/assets/icons/tag-right.svg"
                            alt="Phone"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-[14px] leading-[20px] text-[#252525]">
                          Once you've entered your M-PESA pin, click the PROCEED
                          Button Below to Confirm Payment
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#3A96AF0D] bg-opacity-5 p-4 flex items-center justify-between gap-5 rounded-lg mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/assets/icons/info-circle.svg"
                            alt="Phone"
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                          <p className="text-[14px] leading-[18px] font-medium text-[#3A96AF]">
                            Didn't Receive a payment prompt?
                          </p>
                        </div>
                        <p className="text-[12px] leading-[18px] text-[#64748B] ">
                          In case you've not payment prompt. Please click here
                          to view payment instructions
                        </p>
                      </div>
                      <div className="flex justify-end mt-2">
                        <RippleButton
                          className="bg-[#3A96AF] text-white px-4 py-2 rounded-lg text-[10px] leading-[14px] font-medium"
                          onClick={() => setShowInstructions(!showInstructions)}
                        >
                          Resend Payment Prompt
                        </RippleButton>
                      </div>
                    </div>

                    <RippleButton
                      className="w-full bg-[#3A96AF] text-white py-3 rounded-lg text-[16px] leading-[20px] font-medium"
                      onClick={handleProceedPayment}
                    >
                      Proceed Payment
                    </RippleButton>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="w-full max-w-[400px] border border-[#E8ECF4] rounded-[24px] flex flex-col py-[34px] px-6">
              <h3 className="text-center text-[#252525] text-[24px] leading-[28px] font-semibold tracking-[0.5px] mb-6">
                Order Summary
              </h3>

              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={mockOrder.image}
                  alt="Service"
                  width={60}
                  height={60}
                  className="rounded-xl h-[60px] w-[60px] object-cover"
                />
                <div>
                  <h1 className="font-semibold text-[20px] leading-[24px] tracking-[0.5px] text-[#252525]">
                    {title}
                  </h1>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Image
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={14}
                        height={14}
                      />
                      <Image
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={14}
                        height={14}
                      />
                      <Image
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={14}
                        height={14}
                      />
                      <Image
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={14}
                        height={14}
                      />
                      <Image
                        src="/assets/icons/star.svg"
                        alt="star"
                        width={14}
                        height={14}
                      />
                    </div>
                    <h3 className="text-[#676D75] text-[12px] leading-[18px] font-medium">
                      {mockOrder.reviews} reviews
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">
                  Service Provider
                </h2>
                <div className="flex items-center gap-2 mt-3">
                  <Image
                    src={mockOrder.serviceProvider.avatar}
                    alt="Provider"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-[#252525] text-[14px] leading-[18px] font-semibold">
                      {mockOrder.serviceProvider.name}
                    </h3>
                    <h4 className="mt-1 text-[12px] leading-[16px] font-medium text-[#252525]">
                      {mockOrder.serviceProvider.role}
                    </h4>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">
                  Order By
                </h2>
                <div className="flex items-center gap-2 mt-3">
                  <Image
                    src={mockOrder.orderBy.avatar}
                    alt="Order By"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-[#252525] text-[14px] leading-[18px] font-semibold">
                      {mockOrder.orderBy.name}
                    </h3>
                    <h4 className="mt-1 text-[12px] leading-[16px] font-medium text-[#252525]">
                      {mockOrder.orderBy.role}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="my-6 bg-[#E8ECF4] h-[2px] w-full" />

              <div className="flex justify-between">
                <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-normal">
                  Ticket
                </h3>
                <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-medium">
                  {quantity}
                </h3>
              </div>
              <div className="mt-3 flex justify-between">
                <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-normal">
                  Subtotal
                </h3>
                <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-medium">
                  $ {price}
                </h3>
              </div>
              <div className="w-full h-[2px] bg-[#E8ECF4] mt-3 mb-6" />

              <div className="flex justify-between text-base font-semibold">
                <h3 className="text-[#252525] text-[18px] leading-[20px] tracking-[0.5px] font-semibold">
                  Total Price
                </h3>
                <h3 className="text-[#252525] text-[20px] leading-[20px] tracking-[0.5px] font-bold">
                  $ {total}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Success Modal */}
      <PaymentSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        amount={total}
      />

      {/* Payment Failed Modal */}
      <PaymentFailedModal
        isOpen={showFailedModal}
        onClose={() => setShowFailedModal(false)}
        amount={total}
        onResendRequest={handleResendPaymentRequest}
      />

      <Footer />
    </div>
  );
};

export default Payment;
