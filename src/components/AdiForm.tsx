// import React, { useEffect, useState } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import "./AdiForm.css"; // Import the CSS file
// import Data from "../components/evaluationData.json";

// interface Description {
//   level: string;
//   description: string;
// }

// interface EvaluationData {
//   managercomments: number;
//   selfevalation: Description[];
//   managerevalation: Description[];
// }

// const AdiForm: React.FC = () => {
//   const [evaluationData, setEvaluationData] = useState<EvaluationData | null>(null);

// useEffect(() => {
//     // Set evaluation data directly from the imported JSON
//     setEvaluationData(Data);
//   }, []);

//   if (!evaluationData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="form-container">
//       <h1>ADI-Backend Application Developer</h1>
//       <Formik
//         initialValues={{ selfEvaluation: "", managerEvaluation: "", comments: "" }}
//         validationSchema={Yup.object({
//           selfEvaluation: Yup.string().required("Required"),
//           managerEvaluation: Yup.string().required("Required"),
//           comments: Yup.string().required("Required")
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }}
//       > 
//         {({ values }) => (
//           <Form>
//             <div className="form-group">
//               <label htmlFor="selfEvaluation" style={{ textAlign: "left" }}>
//                 Self Evaluation:
//               </label>
//               <Field as="select" name="selfEvaluation">
//                 <option value="">Select a level</option>
//                 {evaluationData.selfevalation.map((option) => (
//                   <option key={option.level} value={option.level}>
//                     Level {option.level}
//                   </option>
//                 ))}
//               </Field>
//               <ErrorMessage name="selfEvaluation" component="div" className="error-message" />
//             </div>

//             {values.selfEvaluation && (
//               <div>
//                 <p className="description">
//                   {
//                     evaluationData.selfevalation.find(
//                       (option) => option.level === values.selfEvaluation
//                     )?.description
//                   }
//                 </p>
//                 <div className="form-group">
//                   <label htmlFor="managerEvaluation" style={{ textAlign: "left" }}>
//                     Manager Evaluation:
//                   </label>
//                   <Field as="select" name="managerEvaluation">
//                     <option value="">Select a level</option>
//                     {evaluationData.managerevalation.map((option) => (
//                       <option key={option.level} value={option.level}>
//                         Level {option.level}
//                       </option>
//                     ))}
//                   </Field>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="comments" style={{ textAlign: "left" }}>
//                     Manager Comments:
//                   </label>
//                   <Field as="textarea" name="comments" className="comments-field" rows="10" cols="50" />
//                   <ErrorMessage name="comments" component="div" className="error-message" />
//                 </div>
//               </div>
//             )}

//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AdiForm;
// AdiForm.tsx
import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { rcfForms, FieldConfig, FormValues } from "./formConfig"; 
import "./AdiForm.css"; 
import Dropdown from "./Dropdown";
import Textarea from "./Textarea";

// Parse rcfForms to create initial values and field configurations
const parseFormConfig = (config: any) => {
    const initialValues: FormValues = {};
    const fields: FieldConfig[] = config.rcfForms.competencyTracking.controls.map((control: any) => {
        initialValues[control.name] = control.default || "";
        return {
            name: control.name,
            label: control.heading,
            type: control.type === "DropDown" ? "dropdown" : "textarea",
            options: control.lov || [],
        };
    });
    return { initialValues, fields };
};

const { initialValues, fields } = parseFormConfig(rcfForms);

const AdiForm: React.FC = () => {
    const [selectedDescription, setSelectedDescription] = useState<string | null>(null);

    const renderField = (field: FieldConfig, values: FormValues, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
        switch (field.type) {
            case "dropdown":
                return (
                    <React.Fragment key={field.name}>
                        <Dropdown
                            name={field.name}
                            label={field.label}
                            options={field.options || []}
                            onSelect={(value, description) => {
                                setFieldValue(field.name, value);
                                if (field.name === "selfEvalation") {
                                    setSelectedDescription(description);
                                }
                            }}
                            value={values[field.name]}
                        />
                        {field.name === "selfEvalation" && selectedDescription && (
                            <div className="description">
                                <p>{selectedDescription}</p>
                            </div>
                        )}
                    </React.Fragment>
                );
            case "textarea":
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
            <h1>{rcfForms.rcfForms.competencyTracking.heading}</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                    const formattedValues = {
                        form: {
                            competencyTracking: {
                                controls: Object.keys(values).map((key) => ({
                                    name: key,
                                    value: values[key as keyof FormValues],
                                })),
                            },
                        },
                    };
                    console.log("form", formattedValues.form.competencyTracking);
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

export default AdiForm;