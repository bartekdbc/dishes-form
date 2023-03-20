import { Form, Field } from "react-final-form";
import formatPreparationTime from "../../utilities/formatPreparationTime";
import parseNumber from "../../utilities/parseNumber";
import Condition from "../Condition";
import {
  Button,
  ButtonsWrapper,
  ErrorMessage,
  ExtraTitle,
  FieldWrapper,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledLabel,
  Title,
  Wrapper,
} from "./styled";
import Dish from "../../dish-image.png";
import submitDish from "./submitDish";

const DishForm = () => {
  const required = (value) => (value ? undefined : "Required");

  const requiredNameLength = (value) => {
    if (value.length < 3) {
      return "Name should be at least 3 characters.";
    } else return undefined;
  };

  const requiredPreparationTime = (value) => {
    if (!value) {
      return "Required";
    } else if (value.length !== 8) {
      return "Please enter in the following format: 00:00:00";
    }
    return undefined;
  };

  const requiredMinValue = (min) => (value) => {
    return value && value < min ? `Must be at least ${min}` : undefined;
  };

  const requiredMaxValue = (max) => (value) => {
    return value && value > max ? `Must be at most ${max}` : undefined;
  };

  return (
    <Wrapper>
      <StyledForm>
        <Title>Dish App 🍕</Title>
        <ExtraTitle>
          Let's get started! Please fill up the form in order to prepare your
          dish.
        </ExtraTitle>
        <Form
          onSubmit={submitDish}
          render={({ handleSubmit, values, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                validate={(value) =>
                  required(value) || requiredNameLength(value)
                }
              >
                {({ input, meta }) => (
                  <FieldWrapper>
                    <StyledLabel>Dish name</StyledLabel>
                    <StyledInput
                      {...input}
                      type="text"
                      placeholder="Enter your dish name here"
                    />
                    {meta.touched && meta.error && (
                      <ErrorMessage>{meta.error}</ErrorMessage>
                    )}
                  </FieldWrapper>
                )}
              </Field>
              <Field
                name="preparation_time"
                parse={formatPreparationTime}
                validate={requiredPreparationTime}
              >
                {({ input, meta }) => (
                  <FieldWrapper>
                    <StyledLabel>Preparation time</StyledLabel>
                    <StyledInput
                      {...input}
                      type="text"
                      placeholder="00:00:00"
                    />
                    {meta.touched && meta.error && (
                      <ErrorMessage>{meta.error}</ErrorMessage>
                    )}
                  </FieldWrapper>
                )}
              </Field>
              <Field name="type" validate={required}>
                {({ input, meta }) => (
                  <FieldWrapper>
                    <StyledLabel>Dish type</StyledLabel>
                    <StyledInput as="select" {...input}>
                      <option name="" value="">
                        Select a dish type
                      </option>
                      <option name="type" value="pizza">
                        Pizza
                      </option>
                      <option name="type" value="soup">
                        Soup
                      </option>
                      <option name="type" value="sandwich">
                        Sandwich
                      </option>
                    </StyledInput>
                    {meta.touched && meta.error && (
                      <ErrorMessage>{meta.error}</ErrorMessage>
                    )}
                  </FieldWrapper>
                )}
              </Field>
              <Condition when="type" is="pizza">
                <Field
                  name="no_of_slices"
                  parse={parseNumber}
                  validate={(value) =>
                    required(value) ||
                    requiredMinValue(1)(value) ||
                    requiredMaxValue(30)(value)
                  }
                >
                  {({ input, meta }) => (
                    <FieldWrapper>
                      <StyledLabel>Number of slices</StyledLabel>
                      <StyledInput
                        {...input}
                        type="number"
                        min="1"
                        max="30"
                        step="1"
                        placeholder="Choose number of slices 1-30"
                      />
                      {meta.touched && meta.error && (
                        <ErrorMessage>{meta.error}</ErrorMessage>
                      )}
                    </FieldWrapper>
                  )}
                </Field>
              </Condition>
              <Condition when="type" is="pizza">
                <Field
                  name="diameter"
                  parse={parseNumber}
                  validate={(value) =>
                    required(value) ||
                    requiredMinValue(30)(value) ||
                    requiredMaxValue(60)(value)
                  }
                >
                  {({ input, meta }) => (
                    <FieldWrapper>
                      <StyledLabel>Diameter in cm</StyledLabel>
                      <StyledInput
                        {...input}
                        type="number"
                        min="30"
                        max="60"
                        step="0.1"
                        placeholder="Choose size 30-60"
                      />
                      {meta.touched && meta.error && (
                        <ErrorMessage>{meta.error}</ErrorMessage>
                      )}
                    </FieldWrapper>
                  )}
                </Field>
              </Condition>
              <Condition when="type" is="soup">
                <Field
                  name="spiciness_scale"
                  parse={parseNumber}
                  validate={(value) =>
                    required(value) ||
                    requiredMinValue(1)(value) ||
                    requiredMaxValue(10)(value)
                  }
                >
                  {({ input, meta }) => (
                    <FieldWrapper>
                      <StyledLabel>Spiciness scale</StyledLabel>
                      <StyledInput
                        {...input}
                        type="number"
                        min="1"
                        max="10"
                        placeholder="Choose 1-10"
                      />
                      {meta.touched && meta.error && (
                        <ErrorMessage>{meta.error}</ErrorMessage>
                      )}
                    </FieldWrapper>
                  )}
                </Field>
              </Condition>
              <Condition when="type" is="sandwich">
                <Field
                  name="slices_of_bread"
                  parse={parseNumber}
                  validate={(value) =>
                    required(value) ||
                    requiredMinValue(1)(value) ||
                    requiredMaxValue(20)(value)
                  }
                >
                  {({ input, meta }) => (
                    <FieldWrapper>
                      <StyledLabel>Number of bread slices</StyledLabel>
                      <StyledInput
                        {...input}
                        type="number"
                        min="1"
                        max="20"
                        placeholder="Choose 1-20"
                      />
                      {meta.touched && meta.error && (
                        <ErrorMessage>{meta.error}</ErrorMessage>
                      )}
                    </FieldWrapper>
                  )}
                </Field>
              </Condition>
              <ButtonsWrapper>
                <Button type="submit" disabled={submitting}>
                  Submit your dish
                </Button>
                <Button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Clear
                </Button>
              </ButtonsWrapper>
              {/* 
              <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
            </form>
          )}
        />
      </StyledForm>
      <StyledForm>
        <StyledImage src={Dish} alt="dish-img" />
      </StyledForm>
    </Wrapper>
  );
};

export default DishForm;
