"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/input";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = () => {
    router.push("/chat");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
          bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
          "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email"
            label="Email address"
            type="email"
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
