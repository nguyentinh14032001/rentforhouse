import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const HouseSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold">Support</h2>
      <div className="shadow-1 flex w-full flex-col bg-white px-6 py-7">
        <p className="text-text3 mb-8 text-center text-xl">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="Pledge"
          className="mb-5 w-full rounded border border-strock px-5 py-3 text-lg font-medium"
        ></Input>
        <div className="bg-grayf3 mb-5 rounded-xl p-5">
          <p className="text-text2 mb-5 text-sm font-semibold">
            Back it because you believe in it.
          </p>
          <p className="text-text3 text-sm">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className="w-full bg-secondary text-white">Continue</Button>
      </div>
    </div>
  );
};

export default HouseSupport;
