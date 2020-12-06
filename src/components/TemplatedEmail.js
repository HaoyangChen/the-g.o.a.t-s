import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Form, Field } from "react-final-form";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { TextareaAutosize } from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#52616B",
  },
  textArea: {
    margin: "5% auto",
    width: "90%",
  },
  copyButton: {
    margin: "2.5%",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = (value) => (value ? undefined : "Required");

const TemplatedEmail = () => {
  const classes = useStyles();

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const subjectTextAreaRef = useRef(null);

  const recipients = [
    {
      value: "rep1",
      label: "Representative 1",
    },
    {
      value: "rep2",
      label: "Representative 2",
    },
  ];

  const [tone, setTone] = React.useState("");

  const handleChange = (event) => {
    const targetTone = event.target.value;
    console.log("tone is : " + targetTone);
    setTone(targetTone);
    // setState({
    //   ...state,
    //   [tone]: event.target.value,
    // });
    // getSubject();
  };

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    alert("Copied email template to clipboard!");
  }

  function copySubjectToClipboard(e) {
    subjectTextAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    alert("Copied subject template to clipboard!");
  }

  function getToday() {
    var today = new Date();
    var date =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
    return date + "\n";
  }

  function getEmailAttention() {
    let specialPlaceholder = "(FIRST NAME) (LAST NAME)";
    return (
      "\nThe Honorable " +
      specialPlaceholder +
      "\n" +
      "(CAPITOL ADDRESS)" +
      "\n"
    );
  }

  function getSubject() {
    console.log("testing: " + tone);
    console.log(tone);
    let subjectResult = "";
    switch (tone) {
      case "Angry":
        subjectResult = "Angry Subject Line";
        break;
      case "Emotional":
        subjectResult = "Emotional Subject Line";
        break;
      case "Excited":
        subjectResult = "Excited Subject Line";
        break;
      case "Disappointed":
        subjectResult = "Disappointed Subject Line";
        break;
      default:
        subjectResult = "Please Select a Tone to Start the Subject Line";
    }
    return tone ? subjectResult : tone;
    //   "RE: (state the topic or include the bill number, author and subject if you are writing to support or oppose a particular legislative bill) \n"
  }

  function getEmailContent() {
    return "Dear (ASSEMBLY MEMBER/SENATOR) (LAST NAME) My name is (YOUR FIRST NAME, LAST NAME) and I am a regional center consumer (family member/service provider/advocate/community member) who resides in your district. \n \n(State why you support or oppose the bill or other issue here. Choose up to three of the strongest points that support your position and state them clearly.) \n \n(Include a personal story. Tell your representative why the issue is important to you and how it affects you, your family member and your community.) (Tell your representative how you want her or him to vote on this issue and ask for a response. Be sure to include your name and address on both your letter and envelope.)";
  }

  function getClosing() {
    return (
      "\n \nSincerely, \n \n" +
      "(YOUR FIRST AND LAST NAME) \n" +
      "(STREET ADDRESS) \n(CITY), (STATE), (ZIP CODE)"
    );
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Card variant="outlined">
            <CardContent>
              <Typography className={classes.title} variant="h6">
                Templated Email to Representative
              </Typography>
            </CardContent>
            <Divider light />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="tone-native-simple">Subject Tone</InputLabel>
              <Select
                native
                value={tone}
                onChange={handleChange}
                inputProps={{
                  name: "tone",
                  id: "tone-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Angry"}>Angry</option>
                <option value={"Emotional"}>Emotional</option>
                <option value={"Excited"}>Excited</option>
                <option value={"Disappointed"}>Disappointed</option>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextareaAutosize
                  className={classes.textArea}
                  ref={subjectTextAreaRef}
                  rowsMin={2}
                  placeholder="Type or edit your subject line here"
                  defaultValue={getSubject()}
                />
              </Grid>
              <Button
                className={classes.copyButton}
                style={{
                  backgroundColor: "#4C4AC2",
                  borderColor: "#F5F5F5",
                  color: "#F5F5F5",
                }}
                onClick={copySubjectToClipboard}
              >
                Copy Subject Line
              </Button>
              <Grid item xs={12}>
                <TextareaAutosize
                  className={classes.textArea}
                  ref={textAreaRef}
                  rowsMin={25}
                  placeholder="Type or edit your email here"
                  defaultValue={
                    getToday() +
                    getEmailAttention() +
                    getEmailContent() +
                    getClosing()
                  }
                />
              </Grid>
              <Button
                className={classes.copyButton}
                style={{
                  backgroundColor: "#4C4AC2",
                  borderColor: "#F5F5F5",
                  color: "#F5F5F5",
                }}
                onClick={copyToClipboard}
              >
                Copy Email
              </Button>
            </Grid>
          </Card>
        </form>
      )}
    />
  );
};

export default TemplatedEmail;
