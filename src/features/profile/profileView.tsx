import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import validator from "validator";

import { fetchProfile, updateProfile } from "./profileSlice";
import { toString, isEmpty } from "lodash";

interface IFormInputs {
  home_page: string;
}

export const mustBeValidUrl = (value: string) =>
  isEmpty(value) || validator.isURL(value) ? undefined : "Invalid URL";

const ProfileView = () => {
  const profile = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>();

  const onSubmit = (values: IFormInputs) => {
    dispatch(updateProfile(values));
  };

  const {
    data: { username, home_page },
  } = profile;

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div>
      <h3>Your username is {username}</h3>
      <Text>
        You home page is <strong>{home_page}</strong>
      </Text>
      <Image src={profile.data.avatar_url} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.home_page)}>
          <FormLabel htmlFor="home_page">Home url</FormLabel>
          <Input
            id="home_page"
            placeholder="home_page"
            {...register("home_page", {
              required: "This is required",
              validate: value => mustBeValidUrl(value),
            })}
          />
          <FormErrorMessage>
            <Text>
              {errors.home_page && toString(errors.home_page.message)}
            </Text>
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfileView;
