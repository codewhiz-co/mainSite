"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    setDebugInfo(null);

    try {
      const formData = {
        name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
        email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
        subject: (e.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
        message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
      };

      console.log('Submitting form data:', { ...formData, messageLength: formData.message.length });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        toast({
          title: "Message Sent Successfully!",
          description: "We'll review your message and get back to you soon.",
        });
        formRef.current?.reset();
        // Scroll to the success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send message";
      setError(errorMessage);
      
      // If the error response contains debug info, store it
      if (error instanceof Error && 'debug' in (error as any)) {
        setDebugInfo((error as any).debug);
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
            {process.env.NODE_ENV === 'development' && debugInfo && (
              <pre className="mt-2 text-xs bg-black/10 p-2 rounded">
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            )}
          </AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Thank you for your message!</AlertTitle>
          <AlertDescription className="text-green-400">
            We have received your inquiry and will review it shortly. Our team typically responds within 24-48 business hours. We handle all messages in the order they are received.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="mt-2 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          required
          className="mt-2 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="mt-2 h-32 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold h-12 text-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}