import React, { useState } from "react";
import JobAccordian from "../components/JobAccordian";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

import { REQUEST_URL } from "../constant/Constant";

function JobScreen() {
  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState(null);
  const hiddenInput = React.useRef(null);
  const [applyForm, setApplyForm] = useState({
    candidate_name: "",
    guardian_name: "",
    nationality: "",
    gender: "",
    date_of_birth: "0000-00-00",
    domicile: "",
    permanent_address: "",
    present_address: "",
    land_line_no: "",
    office_no: "",
    cell_no: "",
    email: "",
    cnic: "",

    degree_1: "",
    degree_date_1: "",
    degree_institue_1: "",
    degree_specialization_1: "",
    degree_grade_1: "",
    degree_2: "",
    degree_date_2: "",
    degree_institue_2: "",
    degree_specialization_2: "",
    degree_grade_2: "",
    degree_3: "",
    degree_date_3: "",
    degree_institue_3: "",
    degree_specialization_3: "",
    degree_grade_3: "",

    training_institution_1: "",
    training_course_1: "",
    training_diploma_1: "",
    training_field_1: "",
    training_remarks_1: "",
    training_institution_2: "",
    training_course_2: "",
    training_diploma_2: "",
    training_field_2: "",
    training_remarks_2: "",
    training_institution_3: "",
    training_course_3: "",
    training_diploma_3: "",
    training_field_3: "",
    training_remarks_3: "",

    experience_institution_1: "",
    experience_designation_1: "",
    experience_payscale_1: "",
    experience_job_1: "",
    experience_period_1: "0",
    experience_institution_2: "",
    experience_designation_2: "",
    experience_payscale_2: "",
    experience_job_2: "",
    experience_period_2: "0",
    experience_institution_3: "",
    experience_designation_3: "",
    experience_payscale_3: "",
    experience_job_3: "",
    experience_period_3: "0",

    extra_activities: "",

    reference_phone_1: "",
    reference_phone_2: "",
    reference_position_1: "",
    reference_position_2: "",
    reference_residence_1: "",
    reference_residence_2: "",
    file: null,
  });
  let data = new FormData();

  const submitData = async (e) => {
    e.preventDefault();
    console.log(applyForm);
    data.append("candidate_name", applyForm.candidate_name);
    data.append("guardian_name", applyForm.guardian_name);
    data.append("nationality", applyForm.nationality);
    data.append("gender", applyForm.gender);
    data.append("date_of_birth", applyForm.date_of_birth);
    data.append("domicile", applyForm.domicile);
    data.append("permanent_address", applyForm.permanent_address);
    data.append("present_address", applyForm.present_address);
    data.append("land_line_no", applyForm.land_line_no);
    data.append("office_no", applyForm.office_no);
    data.append("cell_no", applyForm.cell_no);
    data.append("email", applyForm.email);
    data.append("cnic", applyForm.cnic);
    data.append("degree_1", applyForm.degree_1);
    data.append("degree_date_1", applyForm.degree_date_1);
    data.append("degree_institue_1", applyForm.degree_institue_1);
    data.append("degree_specialization_1", applyForm.degree_specialization_1);
    data.append("degree_grade_1", applyForm.degree_grade_1);
    data.append("degree_2", applyForm.degree_2);
    data.append("degree_date_2", applyForm.degree_date_2);
    data.append("degree_institue_2", applyForm.degree_institue_2);
    data.append("degree_specialization_2", applyForm.degree_specialization_2);
    data.append("degree_grade_2", applyForm.degree_grade_2);
    data.append("degree_3", applyForm.degree_3);
    data.append("degree_date_3", applyForm.degree_date_3);
    data.append("degree_institue_3", applyForm.degree_institue_3);
    data.append("degree_specialization_3", applyForm.degree_specialization_3);
    data.append("degree_grade_3", applyForm.degree_grade_3);
    data.append("training_institution_1", applyForm.training_institution_1);
    data.append("training_course_1", applyForm.training_course_1);
    data.append("training_diploma_1", applyForm.training_diploma_1);
    data.append("training_field_1", applyForm.training_field_1);
    data.append("training_remarks_1", applyForm.training_remarks_1);
    data.append("training_institution_2", applyForm.training_institution_2);
    data.append("training_course_2", applyForm.training_course_2);
    data.append("training_diploma_2", applyForm.training_diploma_2);
    data.append("training_field_2", applyForm.training_field_2);
    data.append("training_remarks_2", applyForm.training_remarks_2);
    data.append("training_institution_3", applyForm.training_institution_3);
    data.append("training_course_3", applyForm.training_course_3);
    data.append("training_diploma_3", applyForm.training_diploma_3);
    data.append("training_field_3", applyForm.training_field_3);
    data.append("training_remarks_3", applyForm.training_remarks_3);
    data.append("experience_institution_1", applyForm.experience_institution_1);
    data.append("experience_designation_1", applyForm.experience_designation_1);
    data.append("experience_payscale_1", applyForm.experience_payscale_1);
    data.append("experience_job_1", applyForm.experience_job_1);
    data.append("experience_period_1", applyForm.experience_period_1);
    data.append("experience_institution_2", applyForm.experience_institution_2);
    data.append("experience_designation_2", applyForm.experience_designation_2);
    data.append("experience_payscale_2", applyForm.experience_payscale_2);
    data.append("experience_job_2", applyForm.experience_job_2);
    data.append("experience_period_2", applyForm.experience_period_2);
    data.append("experience_institution_3", applyForm.experience_institution_3);
    data.append("experience_designation_3", applyForm.experience_designation_3);
    data.append("experience_payscale_3", applyForm.experience_payscale_3);
    data.append("experience_job_3", applyForm.experience_job_3);
    data.append("experience_period_3", applyForm.experience_period_3);
    data.append("extra_activities", applyForm.extra_activities);
    data.append("reference_phone_1", applyForm.reference_phone_1);
    data.append("reference_phone_2", applyForm.reference_phone_2);
    data.append("reference_position_1", applyForm.reference_position_1);
    data.append("reference_position_2", applyForm.reference_position_2);
    data.append("reference_residence_1", applyForm.reference_residence_1);
    data.append("reference_residence_2", applyForm.reference_residence_2);
    data.append("job_id", id);
    data.append("file", applyForm.file);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.post(
        REQUEST_URL + `/api/applications/create`,
        data,
        config
      );
      if (res.data.success) {
        setShow(false);
        setTimeout(function () {
          alert(res.data.success);
        }, 70);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="career_page">
      <section className="container">
        <h2>
          <span>Available Jobs</span>
        </h2>
        <div className="avail_jobs">
          <JobAccordian show={show} setShow={setShow} id={id} setId={setId} />
        </div>

        {/* FOrm Strat */}
        <div
          id="apply_form"
          className={`formWrapper ${show ? "show" : "hide"}`}
        >
          <h2>
            <span>Apply Online</span>
            <span>{id}</span>
          </h2>
          <section className={`form_cont ${show && show}`}>
            <Form onSubmit={submitData}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name (Capital Letters)*</Form.Label>
                <Form.Control
                  id="candidate_name"
                  required
                  type="text"
                  placeholder="Please Write Your Name"
                  value={applyForm["candidate_name"]}
                  onChange={(e) =>
                    setApplyForm({
                      ...applyForm,
                      candidate_name: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Father/Husband Name *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Please Write Your Father/Husband Name"
                  id="guardian_name"
                  value={applyForm["guardian_name"]}
                  onChange={(e) =>
                    setApplyForm({
                      ...applyForm,
                      guardian_name: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Row>
                <Col sm={12} lg={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nationality *</Form.Label>
                    <Form.Control
                      id="nationality"
                      required
                      type="text"
                      placeholder="Please Write Your Nationality"
                      value={applyForm["nationality"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          nationality: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Gender *</Form.Label>

                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      required
                      value={applyForm["gender"]}
                      onChange={(e) =>
                        setApplyForm({ ...applyForm, gender: e.target.value })
                      }
                      custom
                    >
                      <option value="0">Choose You Gender...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date of Birth *</Form.Label>
                <Form.Control
                  id="date_of_birth"
                  required
                  type="date"
                  value={applyForm["date_of_birth"]}
                  onChange={(e) =>
                    setApplyForm({
                      ...applyForm,
                      date_of_birth: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Domicile *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Domicile"
                  id="domicile"
                  required
                  value={applyForm["domicile"]}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, domicile: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Permanent Address *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please Write Your Permanent Address"
                  id="permanent_address"
                  required
                  value={applyForm["permanent_address"]}
                  onChange={(e) =>
                    setApplyForm({
                      ...applyForm,
                      permanent_address: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Present Address *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please Write Your Present Address"
                  id="present_address"
                  required
                  value={applyForm["present_address"]}
                  onChange={(e) =>
                    setApplyForm({
                      ...applyForm,
                      present_address: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <h3>Contact No</h3>
              <Row>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Residence *</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Contact No"
                      id="land_line_no"
                      required
                      value={applyForm["land_line_no"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          land_line_no: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Office *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Office"
                      id="office_no"
                      value={applyForm["office_no"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          office_no: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Cell No*</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Cell No"
                      id="cell_no"
                      value={applyForm["cell_no"]}
                      onChange={(e) =>
                        setApplyForm({ ...applyForm, cell_no: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please Write Your Email"
                  id="email"
                  required
                  value={applyForm["email"]}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>CNIC NO *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Please Write Your CNIC No"
                  id="cnic"
                  required
                  value={applyForm["cnic"]}
                  onChange={(e) =>
                    setApplyForm({ ...applyForm, cnic: e.target.value })
                  }
                />
              </Form.Group>

              <h3 style={{ lineHeight: "33px" }}>
                Qualification ( Enter the highest degree and go in descending
                order)
              </h3>

              <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Degree</th>
                    <th>Year of Award</th>
                    <th>Institution</th>
                    <th>Field of Specialization</th>
                    <th>Grade/Division/GPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="1" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="degree_1"
                        required
                        value={applyForm["degree_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_1: e.target.value,
                          })
                        }
                        custom
                      >
                        <option value="">Choose You Degree...</option>
                        <option value="4">MS</option>
                        <option value="3">BS</option>
                        <option value="2">FSC</option>
                        <option value="1">Matric</option>
                      </Form.Control>
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="date"
                        id="degree_date_1"
                        required
                        value={applyForm["degree_date_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_date_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_institue_1"
                        required
                        value={applyForm["degree_institue_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_institue_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_specialization_1"
                        required
                        value={applyForm["degree_specialization_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_specialization_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_grade_1"
                        required
                        value={applyForm["degree_grade_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_grade_1: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="1" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="degree_2"
                        value={applyForm["degree_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_2: e.target.value,
                          })
                        }
                        custom
                      >
                        <option value="0">Choose You Degree...</option>
                        <option value="4">MS</option>
                        <option value="3">BS</option>
                        <option value="2">FSC</option>
                        <option value="1">Matric</option>
                      </Form.Control>
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="date"
                        id="degree_date_2"
                        value={applyForm["degree_date_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_date_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_institue_2"
                        value={applyForm["degree_institue_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_institue_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_specialization_2"
                        value={applyForm["degree_specialization_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_specialization_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_grade_2"
                        value={applyForm["degree_grade_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_grade_2: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="3" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="degree_3"
                        value={applyForm["degree_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_3: e.target.value,
                          })
                        }
                        custom
                      >
                        <option value="0">Choose You Degree...</option>
                        <option value="4">MS</option>
                        <option value="3">BS</option>
                        <option value="2">FSC</option>
                        <option value="1">Matric</option>
                      </Form.Control>
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="date"
                        id="degree_date_3"
                        value={applyForm["degree_date_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_date_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_institue_3"
                        value={applyForm["degree_institue_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_institue_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_specialization_3"
                        value={applyForm["degree_specialization_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_specialization_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="degree_grade_3"
                        value={applyForm["degree_grade_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            degree_grade_3: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h3 style={{ lineHeight: "33px" }}>
                Professional Training ( Start from the recent training in
                descending order)
              </h3>
              {/* table 2 getting start ...............................................................................................
.........................................................................................................................
.........................................................................................................................
*/}
              <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Institution </th>
                    <th>Course</th>
                    <th>Diploma/Certificate</th>
                    <th>Field of Study</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="1" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_institution_1"
                        value={applyForm["training_institution_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_institution_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_course_1"
                        value={applyForm["training_course_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_course_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_diploma_1"
                        value={applyForm["training_diploma_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_diploma_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_field_1"
                        value={applyForm["training_field_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_field_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_remarks_1"
                        value={applyForm["training_remarks_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_remarks_1: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="2" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_institution_2"
                        value={applyForm["training_institution_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_institution_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_course_2"
                        value={applyForm["training_course_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_course_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_diploma_2"
                        value={applyForm["training_diploma_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_diploma_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_field_2"
                        value={applyForm["training_field_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_field_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_remarks_2"
                        value={applyForm["training_remarks_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_remarks_2: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="3" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_institution_3"
                        value={applyForm["training_institution_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_institution_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_course_3"
                        value={applyForm["training_course_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_course_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_diploma_3"
                        value={applyForm["training_diploma_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_diploma_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_field_3"
                        value={applyForm["training_field_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_field_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="training_remarks_3"
                        value={applyForm["training_remarks_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            training_remarks_3: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h3 style={{ lineHeight: "33px" }}>
                Experience ( Employment record) ( Start from recent job and go
                in descending order)
              </h3>

              <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Institution </th>
                    <th>Designation</th>
                    <th>Pay Scale</th>
                    <th>Job Profile</th>
                    <th>Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="1" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_institution_1"
                        required
                        value={applyForm["experience_institution_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_institution_1: e.target.value,
                          })
                        }
                      />
                    </td>

                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_designation_1"
                        required
                        value={applyForm["experience_designation_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_designation_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_payscale_1"
                        required
                        value={applyForm["experience_payscale_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_payscale_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_job_1"
                        required
                        value={applyForm["experience_job_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_job_1: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="experience_period_1"
                        required
                        value={applyForm["experience_period_1"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_period_1: e.target.value,
                          })
                        }
                        custom
                      >
                        <option value="0">Choose You Degree...</option>
                        <option value="4">FOUR</option>
                        <option value="3">Three</option>
                        <option value="2">TWO</option>
                        <option value="1">ONE</option>
                      </Form.Control>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="2" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_institution_2"
                        value={applyForm["experience_institution_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_institution_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_designation_2"
                        value={applyForm["experience_designation_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_designation_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_payscale_2"
                        value={applyForm["experience_payscale_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_payscale_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_job_2"
                        value={applyForm["experience_job_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_job_2: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="experience_period_2"
                        value={applyForm["experience_period_2"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_period_2: e.target.value,
                          })
                        }
                        custom
                      >
                        <option value="0">Choose You Degree...</option>
                        <option value="4">FOUR</option>
                        <option value="3">Three</option>
                        <option value="2">TWO</option>
                        <option value="1">ONE</option>
                      </Form.Control>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" defaultValue="3" />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_institution_3"
                        value={applyForm["experience_institution_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_institution_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_designation_3"
                        value={applyForm["experience_designation_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_designation_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_payscale_3"
                        value={applyForm["experience_payscale_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_payscale_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        type="text"
                        id="experience_job_3"
                        value={applyForm["experience_job_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_job_3: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td className="p-0">
                      <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="experience_period_3"
                        value={applyForm["experience_period_3"]}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            experience_period_3: e.target.value,
                          })
                        }
                        custom
                      >
                        <option value="0">Choose You Degree...</option>
                        <option value="4">FOUR</option>
                        <option value="3">Three</option>
                        <option value="2">TWO</option>
                        <option value="1">ONE</option>
                      </Form.Control>
                    </td>
                  </tr>
                </tbody>
              </Table>

              {/* <h3 style={{ lineHeight: "33px" }}>Journal Publications</h3> */}

              {/* <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Title </th>
                    <th>Name of journal </th>
                    <th>Year</th>
                    <th>Volume of Publication</th>
                    <th>Page no</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="date" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="date" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="date" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                  </tr>
                </tbody>
              </Table> */}

              {/* <h3 style={{ lineHeight: "33px" }}>Conference Publications</h3> */}

              {/* <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Title </th>
                    <th>Name of Conference </th>
                    <th>Year</th>
                    <th>National / International</th>
                    <th>Page no</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="date" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="date" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="date" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="text" />
                    </td>
                    <td className="p-0">
                      <Form.Control type="number" />
                    </td>
                  </tr>
                </tbody>
              </Table> */}

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  Extra Co-curricular Activities/hobbies/Interest ( If Any ):
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Please Write Your Extra Co-curricular Activities/hobbies/Interest"
                  rows={7}
                  id="extra_activities"
                  value={applyForm["extra_activities"]}
                  onChange={(e) =>
                    setApplyForm({
                      ...applyForm,
                      extra_activities: e.target.value,
                    })
                  }
                />
              </Form.Group>

              {/* <Row className="py-3">
                <Col sm={12} lg={4} className="d-flex">
                  <Form.Label
                    className="my-1 mr-2 d-flex align-items-center"
                    htmlFor="inlineFormCustomSelectPref"
                  >
                    Languages
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                    <option value="0">Choose...</option>
                    <option value="1">English</option>
                    <option value="2">Urdu</option>
                    <option value="3">Others</option>
                  </Form.Control>
                </Col>
              </Row> */}

              <h3>
                References ( At least two Academic/professional References):
              </h3>
              <Row>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Reference No 1 *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Residence"
                      id="reference_residence_1"
                      required
                      value={applyForm["reference_residence_1"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          reference_residence_1: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Position *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Position"
                      id="reference_position_1"
                      required
                      value={applyForm["reference_position_1"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          reference_position_1: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address/Phone NO *</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Address/Phone NO"
                      id="reference_phone_1"
                      required
                      value={applyForm["reference_phone_1"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          reference_phone_1: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Reference No 1 *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Residence"
                      id="reference_residence_2"
                      value={applyForm["reference_residence_2"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          reference_residence_2: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Position *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Position"
                      id="reference_position_2"
                      value={applyForm["reference_position_2"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          reference_position_2: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address/Phone NO *</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Address/Phone NO"
                      id="reference_phone_2"
                      value={applyForm["reference_phone_2"]}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          reference_phone_2: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h5 className="my-3 d-flex align-items-center">
                <strong className="strong">Upload CV:</strong>{" "}
                <input
                  type="file"
                  required
                  onChange={(e) => {
                    setApplyForm({ ...applyForm, file: e.target.files[0] });
                  }}
                  ref={hiddenInput}
                  className="d-none"
                />
                <Button
                  className="m-0 ml-3 "
                  variant="contained"
                  color="default"
                  // startIcon={<CloudUploadIcon />}
                  onClick={() => hiddenInput.current.click()}
                >
                  Upload
                </Button>
              </h5>
              <p>
                I solemnly declare that the above information I have given is
                correct up to my best knowledge and if any information is found
                incorrect I shall be responsible for that
              </p>

              <Row className="p-0 m-0 justify-content-end">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Row>
            </Form>
          </section>
        </div>
      </section>
    </div>
  );
}

export default JobScreen;
