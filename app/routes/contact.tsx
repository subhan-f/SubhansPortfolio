import type { ActionFunctionArgs, MetaFunction } from "react-router";
import { Form, useActionData, useNavigation } from "react-router";
import { z } from "zod";
import { sendEmail } from "~/lib/email.server";
import { ContactForm } from "~/components/sections/Contact";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  service: z.string().min(1, "Select a service"),
  budget: z.string().optional(),
  idea: z.string().min(1, "Please describe your idea"),
});

export const meta: MetaFunction = () => [
  { title: "Contact Subhan Farrakh | Start Your Automation Project" },
  {
    name: "description",
    content:
      "Ready to automate your business? Reach out for a free consultation on AI workflows and integrations.",
  },
];

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const result = schema.safeParse(data);
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    await sendEmail(result.data);
    return { success: true };
  } catch (error) {
    return { error: "Failed to send message. Please try again." };
  }
}

export default function ContactRoute() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <ContactForm
      actionData={actionData}
      isSubmitting={isSubmitting}
      Form={Form}
    />
  );
}