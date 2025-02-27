import { Button } from "@dynamic-gen/avengers-ui";
import { MoveRight, X } from "lucide-react";
import { useNavigate } from "react-router";
import { Title } from "../../components/ui/title.tsx";
import ROUTE_NAMES from "../../config/router/route-names.ts";
import logo from '../../assets/logo.jpeg'

export function HomePage() {
    const navigate = useNavigate();
    const onAgree = () => navigate(ROUTE_NAMES.INTERESTS)

    return (
        <div className={"flex flex-col gap-4 min-h-screen p-4"}>
            <img src={logo} alt="" className="size-20 rounded-full border-4 border-white shadow-lg self-center" />
            <div className="h-screen grid grid-rows-12 gap-4">
                <div className="row-span-1">
                    <header className="text-center">
                        <Title>Terms and Services</Title>
                        <p className="text-sm text-gray-600">Last updated: February 26, 2025</p>
                    </header>
                </div>    
                <div className="row-span-9 overflow-y-auto bg-gray-100 p-2 rounded-lg border">

                    <div className="space-y-4">
                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">1. Introduction</h2>
                        <p className="text-sm text-gray-700">
                        Welcome to our Event Planning Platform. By using our services, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before using the platform.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">2. User Responsibilities</h2>
                        <p className="text-sm text-gray-700">
                        Users are responsible for maintaining the confidentiality of their account information and for all activities under their account. You agree to use the platform only for lawful purposes and in accordance with our terms.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">3. Services Provided</h2>
                        <p className="text-sm text-gray-700">
                        Our platform offers event planning tools including scheduling, guest list management, venue booking, and event coordination services. We reserve the right to modify or discontinue any part of the service at any time without prior notice.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">4. Payment Terms</h2>
                        <p className="text-sm text-gray-700">
                        Payment for event planning services is required in advance. All payments made on the platform are non-refundable unless stated otherwise. We accept various payment methods such as credit cards and online payment systems.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">5. User Content</h2>
                        <p className="text-sm text-gray-700">
                        Users are responsible for any content they upload, share, or post on the platform. By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute that content as necessary for the operation of the platform.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">6. Intellectual Property</h2>
                        <p className="text-sm text-gray-700">
                        All content, features, and functionality available on the platform are the exclusive property of our company and are protected by copyright, trademark, and other intellectual property laws. You agree not to copy, reproduce, or distribute any of our materials without permission.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">7. Limitation of Liability</h2>
                        <p className="text-sm text-gray-700">
                        In no event shall we be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the platform. Our liability shall be limited to the amount paid for the services you have utilized.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">8. Privacy Policy</h2>
                        <p className="text-sm text-gray-700">
                        We respect your privacy and are committed to protecting your personal information. Please review our <a href="#" className="text-gray-600 underline">Privacy Policy</a> for detailed information on how we collect, use, and protect your data.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">9. Termination</h2>
                        <p className="text-sm text-gray-700">
                        We may terminate or suspend your access to the platform at any time, without prior notice, if we believe you have violated any of the terms outlined in this agreement.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">10. Governing Law</h2>
                        <p className="text-sm text-gray-700">
                        These Terms and Conditions are governed by the laws of the jurisdiction in which our company is registered, without regard to its conflict of law principles.
                        </p>
                    </section>

                    
                    <section>
                        <h2 className="text-base font-semibold text-gray-600">11. Contact Information</h2>
                        <p className="text-sm text-gray-700">
                        If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@eventplatform.com" className="text-gray-600">support@eventplatform.com</a>.
                        </p>
                    </section>
                    </div>

                    <footer className="text-center py-6 mt-12 border-t border-gray-300">
                    <p className="text-sm text-gray-600">© 2025 Event Planning Platform. All rights reserved.</p>
                    </footer>
                </div>
                <div className="row-span-2 grid grid-cols-5 gap-4">
                    <Button className="col-span-2" variant={"outline"}><X /> Cancel</Button>
                    <Button onClick={onAgree} className="col-span-3">Agree & Continue <MoveRight /></Button>
                </div>
            </div>
        </div>
    )
}