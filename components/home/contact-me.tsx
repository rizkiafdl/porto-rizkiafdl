"use client";

import * as React from "react";
import { useState } from "react"; // Import state hooks
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
// Ensure Link is imported

export function ContactMe() {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        // Construct the WhatsApp link
        const phoneNumber = '6281394269183'; // Replace with your phone number
        const encodedMessage = encodeURIComponent(message); // Encode the message for URL
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.location.href = whatsappLink;

        // Optional: clear the form and set status message
        setEmail('');
        setMessage('');
        setStatus(''); // You can display status messages as needed
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-black p-10 md:p-20 space-y-8 md:space-y-0 md:space-x-8">
            {/* Profile Image */}
            <div className="flex justify-center md:w-1/2">
                <Image
                    src="/rizkiafdl/profile_rizki.jpg"
                    alt="Profile Image"
                    height={300}
                    width={300}
                    className="rounded-full object-cover shadow-lg"
                />
            </div>

            {/* Contact Form */}
            <Card className="w-full max-w-[400px] md:w-1/2 bg-white shadow-md">
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                    <CardDescription>Send me a message and I’ll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            {/* Email input */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                />
                            </div>

                            {/* Message input */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your message"
                                    required
                                />
                            </div>
                        </div>

                        {/* Status Message */}
                        {status && <p className="text-center text-sm mt-2">{status}</p>}

                        <CardFooter className="flex justify-between mt-4">
                            <Button variant="outline" type="reset" onClick={() => { setEmail(''); setMessage(''); setStatus(''); }}>
                                Cancel
                            </Button>
                            <Button type="submit">Send</Button>
                        </CardFooter>
                    </form>
                </CardContent>

                {/* Social Media Links */}
                <CardFooter className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/rizkiafdl/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 w-6 h-6" />
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
}
