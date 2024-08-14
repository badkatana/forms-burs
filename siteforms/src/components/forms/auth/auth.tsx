import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../../interfaces/IUser";
import { text } from "stream/consumers";
import { useState } from "react";
import { useCheckAuth } from "../../../hooks/useCheckAuth";

export const Auth = () => {
  const textError = "This field is required";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit = (data: IUser) => {
    // here will be a mutation to check or register
  };

  return (
    <Box sx={{ width: "20%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Your Name"
          {...register("name", {
            required: textError,
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: "It's not a name",
            },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          placeholder="Josif Maria zu Nitke"
          fullWidth
          margin="normal"
        />

        <Select
          label="Gender"
          {...register("gender", {
            required: textError,
          })}
          fullWidth
          placeholder="Choose your gender"
          error={!!errors.gender}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>

        <TextField
          label="Phone number"
          {...register("phoneNumber", {
            required: textError,
            pattern: {
              value: /^[0-9]{11}$/,
              message: "Not correct phone number",
            },
          })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          {...register("password", {
            required: textError,
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="outlined" color="primary">
          submit
        </Button>
      </form>
    </Box>
  );
};
