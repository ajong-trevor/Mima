
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generatePastryResponse } from '@/ai/flows/ai-customer-support';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Bot, Send, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  inquiry: z.string().min(10, { message: "Please tell us a bit more about your question (at least 10 characters)." }).max(500, {message: "Inquiry too long (max 500 characters)."}),
});

type FormValues = z.infer<typeof formSchema>;

interface ChatMessage {
  type: 'user' | 'ai';
  text: string;
}

export function AICustomerSupportSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiry: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setChatHistory(prev => [...prev, { type: 'user', text: data.inquiry }]);
    try {
      const result = await generatePastryResponse({ inquiry: data.inquiry });
      setChatHistory(prev => [...prev, { type: 'ai', text: result.response }]);
      form.reset();
    } catch (error) {
      console.error("Error generating AI response:", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Our AI assistant is a bit busy. Please try again later.",
        variant: "destructive",
      });
       setChatHistory(prev => [...prev, { type: 'ai', text: "I'm sorry, I couldn't process that right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-support" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">AI Pastry Helper</h2>
            <Sparkles className="h-8 w-8 text-primary ml-2" />
          </div>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
            Have a question about our pastries? Our AI assistant is here to help with creative suggestions!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center"><Bot className="mr-2 h-6 w-6 text-primary" /> Ask Mima&apos;s AI</CardTitle>
            <CardDescription>Get personalized responses for your pastry queries.</CardDescription>
          </CardHeader>
          <CardContent>
            {chatHistory.length > 0 && (
              <div className="mb-6 max-h-96 overflow-y-auto space-y-4 p-4 rounded-md border bg-muted/50">
                {chatHistory.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-lg max-w-[80%] ${msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                 {isLoading && chatHistory[chatHistory.length -1]?.type === 'user' && (
                    <div className="flex justify-start">
                        <div className="p-3 rounded-lg bg-secondary text-secondary-foreground inline-flex items-center">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Thinking...
                        </div>
                    </div>
                )}
              </div>
            )}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="inquiry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Your Inquiry</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., What's a good cake for a birthday party?"
                          className="resize-none"
                          rows={3}
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Getting Answer...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Ask AI
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
