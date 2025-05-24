// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI agent that generates creative and personalized responses to customer inquiries about pastries.
 *
 * - generatePastryResponse - A function that generates a response to a customer inquiry.
 * - GeneratePastryResponseInput - The input type for the generatePastryResponse function.
 * - GeneratePastryResponseOutput - The return type for the generatePastryResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePastryResponseInputSchema = z.object({
  inquiry: z.string().describe('The customer inquiry about the pastries.'),
});

export type GeneratePastryResponseInput = z.infer<
  typeof GeneratePastryResponseInputSchema
>;

const GeneratePastryResponseOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the customer inquiry.'),
});

export type GeneratePastryResponseOutput = z.infer<
  typeof GeneratePastryResponseOutputSchema
>;

export async function generatePastryResponse(
  input: GeneratePastryResponseInput
): Promise<GeneratePastryResponseOutput> {
  return generatePastryResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePastryResponsePrompt',
  input: {schema: GeneratePastryResponseInputSchema},
  output: {schema: GeneratePastryResponseOutputSchema},
  prompt: `You are a customer support agent for Mima's Delights, a bakery specializing in pastries. Generate a creative and personalized response to the following customer inquiry about our pastries:\n\nInquiry: {{{inquiry}}}\n\nResponse:`, safetySettings: [
    {
      category: 'HARM_CATEGORY_HATE_SPEECH',
      threshold: 'BLOCK_ONLY_HIGH',
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      threshold: 'BLOCK_NONE',
    },
    {
      category: 'HARM_CATEGORY_HARASSMENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      threshold: 'BLOCK_LOW_AND_ABOVE',
    },
  ],
});

const generatePastryResponseFlow = ai.defineFlow(
  {
    name: 'generatePastryResponseFlow',
    inputSchema: GeneratePastryResponseInputSchema,
    outputSchema: GeneratePastryResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
