import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { rcfForms, FieldConfig, FormValues } from "./formConfig";
import "./AdiForm.css";
import Textarea from "./Textarea";

// Parse rcfForms to create initial values and field configurations for coreCapabilities
const parseCoreCapabilitiesConfig = (config: any) => {
    const initialValues: FormValues = {};
    const fields: FieldConfig[] = config.rcfForms.coreCapabilities.controls.map((control: any) => {
        initialValues[control.name] = control.default || "";
        return {
            name: control.name,
            label: control.heading,
            type: control.type,
        };
    });
    return { initialValues, fields };
};

const { initialValues: coreInitialValues, fields: coreFields } = parseCoreCapabilitiesConfig(rcfForms);

const CoreCapabilitiesForm: React.FC = () => {
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
            <h1>{rcfForms.rcfForms.coreCapabilities.heading}</h1>
            <Formik
                initialValues={coreInitialValues}
                onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                    const formattedValues = {
                        form: {
                            coreCapabilities: {
                                controls: Object.keys(values).map((key) => ({
                                    name: key,
                                    value: values[key as keyof FormValues],
                                })),
                            },
                        },
                    };
                    console.log("form", formattedValues.form.coreCapabilities);
                    console.log(JSON.stringify(formattedValues, null, 2));
                    setSubmitting(false);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        {coreFields.map((field) => renderField(field, values, setFieldValue))}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CoreCapabilitiesForm;
