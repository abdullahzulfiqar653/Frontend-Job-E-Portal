import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { ExpandMore } from "@material-ui/icons";
import axios from "axios";
import { REQUEST_URL } from "../constant/Constant";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ show, setShow, id, setId }) {
  const state = useSelector((state) => state);
  const isAuthenticated = state.auth.isAuthenticated;
  const [jobs, setJobs] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    jobcall();
  }, []);

  const jobcall = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(REQUEST_URL + `/api/get/jobs`, config)
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(jobs);
  return (
    <>
      {jobs &&
        jobs.map((obj, i) => (
          <>
            {/* JOb Start */}
            <div className="job">
              <div className="Maintitle py-1">
                <div className="title">
                  <span className="green">Position Title: </span>
                </div>
                <div className="detail">
                  <h3>{obj.position_title}</h3>
                  <h4>
                    <span className="green"> Department: </span>
                    NA
                  </h4>
                </div>
              </div>

              {/* acordian */}
              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore style={{ color: "red" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="p-0 m-0"
                  >
                    <div className="details  w-100">
                      <div className="title">
                        <span className="green">Experianced: </span>
                      </div>
                      <div className="detail">
                        <p>
                          {obj.experienced}
                          <a>Read More..</a>
                        </p>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="details">
                      <div className="title">
                        <span className="green">Qualification: </span>
                      </div>
                      <div className="detail">
                        <p>{obj.qualification}</p>
                      </div>
                    </div>
                    <div className="details">
                      <div className="title">
                        <span className="green">Description: </span>
                      </div>
                      <div className="detail">
                        <h5>Knowldge</h5>
                        <p>{obj.knowledge}</p>
                        <h5>Job Responsibilities:</h5>
                        <p>{obj.job_responsibility}</p>
                        <h5>Skill Set:</h5>
                        <ul className="pl-5">
                          <li>{obj.skill_set}</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              {/* accordian */}

              <div className="applyDiv">
                <HashLink
                  smooth
                  to="#apply_form"
                  className="my-3 btn"
                  onClick={
                    isAuthenticated
                      ? () => {
                          setShow(true);
                          setId(obj.id);
                        }
                      : () => {
                          history.push("/login");
                        }
                  }
                >
                  Apply
                </HashLink>
              </div>
            </div>
            {/* Job End */}
          </>
        ))}
    </>
  );
}
