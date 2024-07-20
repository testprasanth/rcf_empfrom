import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { rcfForms, FieldConfig, FormValues } from "./formConfig";
import "./AdiForm.css";
import Textarea from "./Textarea";

// Parse rcfForms to create initial values and field configurations
const parseFormConfig = (config: any) => {
    const initialValues: FormValues = {};
    const fields: FieldConfig[] = config.rcfForms.employeeInfo.controls.map((control: any) => {
        initialValues[control.name] = control.default || "";
        return {
            name: control.name,
            label: control.heading,
            type: control.type,
        };
    });
    return { initialValues, fields };
};

const { initialValues, fields } = parseFormConfig(rcfForms);

const EmpForm: React.FC = () => {
    const renderField = (field: FieldConfig, values: FormValues, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
        switch (field.type) {
            case "TextArea":
                return (
                    <Textarea
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        value={values[field.name]}
                        onChange={(e) => setFieldValue(field.name, e.target.value)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="form-container">
            <h1>{rcfForms.rcfForms.employeeInfo.heading}</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                    const formattedValues = {
                        form: {
                            employeeInfo: {
                                controls: Object.keys(values).map((key) => ({
                                    name: key,
                                    value: values[key as keyof FormValues],
                                })),
                            },
                        },
                    };
                    console.log("form", formattedValues.form.employeeInfo);
                    console.log(JSON.stringify(formattedValues, null, 2));
                    setSubmitting(false);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        {fields.map((field) => renderField(field, values, setFieldValue))}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EmpForm;
