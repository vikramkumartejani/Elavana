import React from "react";
import Image from "next/image";
import RippleButton from "@/components/ui/Button";
import PhoneNumberDropdown from "@/components/ui/PhoneNumberDropdown";

interface MPesaPaymentProps {
    selected: boolean;
    onSelect: () => void;
    phoneNumber: string;
    setPhoneNumber: (v: string) => void;
    mpesaPromptSent: boolean;
    showInstructions: boolean;
    setShowInstructions: (v: boolean) => void;
    handleProceedPayment: () => void;
}

const MPesaPayment: React.FC<MPesaPaymentProps> = ({
    selected,
    onSelect,
    phoneNumber,
    setPhoneNumber,
    mpesaPromptSent,
    showInstructions,
    setShowInstructions,
    handleProceedPayment,
}) => (
    <div
        className={`border ${selected ? "border-[#3A96AF]" : "border-[#E8ECF4]"} rounded-lg p-5 cursor-pointer transition-colors`}
        onClick={onSelect}
    >
        <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
                <Image src="/assets/icons/mpesa.png" alt="M-Pesa" width={70} height={70} className="object-cover" />
            </div>
            <div className="flex-1">
                <h3 className="text-[18px] sm:text-[20px] leading-[18px] sm:leading-[20px] font-semibold text-[#252525]">M-Pesa Payment</h3>
                <p className="text-[14px] leading-[18px] sm:leading-[20px] font-medium text-[#64748B] mt-1">Do the payment through your Bank card</p>
            </div>
        </div>
        {selected && (
            <div className="mt-4 sm:mt-6 border-t-2 border-[#E8ECF4] pt-4 sm:pt-6">
                {!mpesaPromptSent ? (
                    <>
                        <label className="block text-[16px] leading-[20px] text-[#252525] font-medium mb-3">Phone Number</label>
                        <div className="flex items-center gap-2 mb-4 sm:mb-6 max-w-[450px]">
                            <input
                                type="tel"
                                className="flex-1 rounded-xl bg-[#F8FAFC] px-4 py-3.5 placeholder:text-[#676D75] text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] outline-none border focus:border-[#3A96AF] transition duration-150"
                                placeholder="Enter Your Phone Number"
                                required
                                onChange={e => setPhoneNumber(e.target.value)}
                                onClick={e => e.stopPropagation()}
                            />
                        </div>

                        <div className="mb-4 sm:mb-6">
                            <h4 className="mb-3 text-[16px] font-medium leading-[20px] tracking-[0.5px] text-[#252525]">How to Send?</h4>
                            <ol className="text-[12px] leading-[16px] font-normal text-[#64748B] list-decimal list-inside space-y-2">
                                <li>Go to M-PEA on your Phone</li>
                                <li>Select Pay Bill Option</li>
                                <li>Enter business and account number</li>
                                <li>Enter the Amount</li>
                                <li>Enter you M-PESA PIN and send</li>
                                <li>You will receive a confirmation SMS from M-PESA with a confirmation code.</li>
                            </ol>
                        </div>
                        <RippleButton
                            className="w-fit bg-[#3A96AF] px-[26px] text-white py-3 rounded-lg text-[16px] leading-[20px] font-medium tracking-[0.5px]"
                            onClick={e => { e.stopPropagation(); handleProceedPayment(); }}
                        >
                            Proceed Payment
                        </RippleButton>
                    </>
                ) : (
                    <>
                        <p className="text-[14px] sm:text-[16px] leading-[18px] sm:leading-[24px] font-medium tracking-[0.5px] text-[#252525] mb-4">
                            A Payment prompt has been sent to your Phone Number
                        </p>
                        <div className="flex items-center gap-3 bg-[#F8FAFC] px-4 py-3.5 rounded-[12px] mb-4 max-w-[344px]">
                            <Image src="/assets/icons/call.svg" alt="Phone" width={24} height={24} className="object-contain" />
                            <p className="text-[16px] leading-[20px] tracking-[0.5px] font-medium text-[#252525]">{phoneNumber}</p>
                        </div>

                        <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-[504px]">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <Image src="/assets/icons/tag-right.svg" alt="Phone" width={16} height={16} className="object-contain sm:w-4 w-3.5" />
                                <p className="text-[12px] sm:text-[14px] font-normal tracking-[0.5px] leading-[16px] sm:leading-[20px] text-[#252525]">
                                    Your screen will be light up requesting you to enter your M-PESA PIN
                                </p>
                            </div>

                            <div className="flex items-start gap-2 sm:gap-3">
                                <Image src="/assets/icons/tag-right.svg" alt="Phone" width={16} height={16} className="object-contain sm:w-4 w-3.5" />
                                <p className="text-[12px] sm:text-[14px] font-normal tracking-[0.5px] leading-[16px] sm:leading-[20px] text-[#252525]">
                                    Once you've entered your M-PESA pin, click the PROCEED Button Below to Confirm Payment
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#3A96AF0D] p-3 flex items-center flex-wrap justify-between gap-4 rounded-lg sm:rounded-[16px] mb-4 sm:mb-6">
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    <Image src="/assets/icons/info-circle.svg" alt="Phone" width={18} height={18} className="object-contain" />
                                    <p className="text-[14px] leading-[18px] font-medium text-[#3A96AF]">
                                        Didn't Receive a payment prompt?
                                    </p>
                                </div>
                                <p className="text-[12px] font-normal leading-[18px] sm:leading-[20px] text-[#3A96AF] ">
                                    In case you've not payment prompt. Please click here to view payment instructions
                                </p>
                            </div>

                            <RippleButton
                                className="bg-[#3A96AF] text-white p-2 rounded-lg text-[10px] leading-[14px] tracking-[0.5px] font-medium"
                                onClick={e => { e.stopPropagation(); handleProceedPayment(); }}
                            >
                                Resend Payment Prompt
                            </RippleButton>
                        </div>
                        <RippleButton
                            className="w-full sm:w-fit bg-[#3A96AF] text-white py-2.5 sm:py-3 px-[26px] rounded-lg text-[16px] tracking-[0.5px] leading-[20px] font-medium"
                            onClick={e => { e.stopPropagation(); handleProceedPayment(); }}
                        >
                            Proceed Payment
                        </RippleButton>
                    </>
                )}
            </div>
        )}
    </div>
);

export default MPesaPayment;
