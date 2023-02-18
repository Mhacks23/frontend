import React, { useContext, useState } from "react";
import styles from "../styles/Transcript.module.css";
import axios from "axios";
import dataContext from "@/hooks/DataContext/dataContext";
import authContext from "@/hooks/AuthContext/authContext";
import { Container, Tabs, Tab } from "react-bootstrap";
import TransHistory from "@/components/transcript/TransHistory";

const transcript = () => {
  const { user } = useContext(authContext);
  const { sendTranscripts } = useContext(dataContext);
  const [link, setLink] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [yid, setYid] = useState("");
  const initialSubs = ["Psychology", "Geography", "History"];
  const handleSubmit = () => {
    setYid(link.split("=")[1]);
    let formData = {
      user_id: user ? user.user_id : "test_user_1",
      video_url: link,
      chapter_name: chapter,
      subject_name: subject,
    };
    sendTranscripts(formData);
  };
  return (
    <div>
      <TransHistory />
    </div>
  );
};

export default transcript;
