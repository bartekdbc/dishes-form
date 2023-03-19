import { Form, Field } from "react-final-form";
import Condition from "../Condition";
import { Button, StyledForm } from "./styled";

const DishForm = () => {
  const onSubmit = (e) => {
    debugger;
  };

  const required = (value) => (value ? undefined : "Required");

  return (
    <StyledForm>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Dish name</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Write you dish name here"
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="preparation_time" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Preparation time</label>
                  <input {...input} type="text" placeholder="00:00:00" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="type" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Dish type</label>
                  <select {...input}>
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
                  </select>
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Condition when="type" is="pizza">
              <Field name="no_of_slices" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Number of slices</label>
                    <input
                      {...input}
                      type="number"
                      min="1"
                      max="30"
                      step="1"
                      placeholder="Choose number of slices 1-30"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </Condition>
            <Condition when="type" is="pizza">
              <Field name="diameter" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Diameter</label>
                    <input
                      {...input}
                      type="number"
                      min="10"
                      max="20"
                      placeholder="Choose size 10-20 inch"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </Condition>
            <Condition when="type" is="soup">
              <Field name="spiceness_scale" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Spiceness scale</label>
                    <input
                      {...input}
                      type="number"
                      min="1"
                      max="10"
                      placeholder="Choose 1-10"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </Condition>
            <Condition when="type" is="sandwich">
              <Field name="spiceness_scale" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Number of bread slices</label>
                    <input
                      {...input}
                      type="number"
                      min="1"
                      max="20"
                      placeholder="Choose 1-20"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </Condition>

            <Button type="submit">Submit</Button>
          </form>
        )}
      />
    </StyledForm>
  );
};

export default DishForm;
