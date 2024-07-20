// Mock Data
export const rcfForms = {
    "rcfForms": {
        "competencyTracking": {
            "type": "tab",
            "heading": "Competency Tracking",
            "controls": [
                {
                    "name": "selfEvalation",
                    "type": "DropDown",
                    "heading": "Self Evaluation",
                    "lov": [
                        { "level": "1", "description": "Basic knowledge on Backend programming language(eg: Java, Python, C#). Basic knowledge on Database systems(eg: SQL, NoSQL). Familiar with the software development methodologies(eg: SCRUM, Agile)." },
                        { "level": "2", "description": "Good knowledge on Backend programming language(eg: Java, Python, C#). Good knowledge on Database systems(eg: SQL, NoSQL). Proficient in one language(eg: Java). Experience in one of the web frameworks(eg: Springboot)." },
                        { "level": "3", "description": "Advanced knowledge on Backend programming language(eg: Java, Python, C#). Advanced knowledge on Database systems(eg: SQL, NoSQL, MongoDB). Expert design on Restful APIs." },
                        { "level": "4", "description": "Proficient knowledge on Backend programming language(eg: Java, Python, C#). Proficient knowledge on Database systems(eg: SQL, NoSQL). Authentication and authorization on Restful APIs." },
                        { "level": "5", "description": "Expert knowledge on Backend programming language(eg: Java, Python, C#). Expert knowledge on Database systems(eg: SQL, NoSQL)." }
                    ],
                    "protected": false,
                    "required": true
                },
                {
                    "name": "managerEvalation",
                    "type": "DropDown",
                    "heading": "Manager Evaluation",
                    "lov": [
                        { "level": "1", "description": "Manager Evaluation - Level 1" },
                        { "level": "2", "description": "Manager Evaluation - Level 2" },
                        { "level": "3", "description": "Manager Evaluation - Level 3" },
                        { "level": "4", "description": "Manager Evaluation - Level 4" },
                        { "level": "5", "description": "Manager Evaluation - Level 5" }
                    ],
                    "protected": false,
                    "required": true
                },
                {
                    "name": "managerComments",
                    "type": "TextArea",
                    "heading": "Manager Comments",
                    "default": null,
                    "lov": null,
                    "protected": false,
                    "required": true
                },
            ]
        },
        "employeeInfo": {
            "type": "tab",
            "heading": "Employee Information",
            "controls": [
                {
                    "name": "employeeName",

                    "type": "TextArea",
                    "heading": "Employee Name",
                    "default": "",
                    "lov": null,
                    "protected": false,
                    "required": true
                },
                {
                    "name": "employeeID",
                    "type": "TextArea",
                    "heading": "Employee ID",
                    "default": "",
                    "lov": null,
                    "protected": false,
                    "required": true
                }
                
            ]
        },
        "coreCapabilities": {
            "type": "tab",
            "heading": "Core Capabilities",
            "controls": [
                {
                    "name": "technicalSkills",
                    "type": "TextArea",
                    "heading": "Technical Skills",
                    "default": "",
                    "lov": null,
                    "protected": false,
                    "required": false
                },
                {
                    "name": "softSkills",
                    "type": "TextArea",
                    "heading": "Soft Skills",
                    "default": "",
                    "lov": null,
                    "protected": false,
                    "required": false
                },
                
            ]
        }
    }
};

// Interfaces
export interface FieldConfig {
    name: string;
    label: string;
    type: string;
    options?: { level: string; description?: string }[];
}

export interface FormValues {
    [key: string]: string;
}
