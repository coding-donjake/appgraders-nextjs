"use client";
import {
  DangerButton,
  DangerIconButton,
  DangerPillButton,
  PrimaryButton,
  PrimaryIconButton,
  PrimaryPillButton,
  SecondaryButton,
  SecondaryIconButton,
  SecondaryPillButton,
} from "@/components/buttons/component";
import { PrimaryInput } from "@/components/inputs/component";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const IndexPage = () => {
  useEffect(() => {
    localStorage.setItem("theme", "slate");
  }, []);

  return (
    <>
      <div className="flex gap-4 p-4">
        <PrimaryButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <SecondaryButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <DangerButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
          processing
        />
        <PrimaryPillButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <SecondaryPillButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <DangerPillButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
          processing
        />
        <PrimaryIconButton icon={<FontAwesomeIcon icon={faIcons} />} />
        <SecondaryIconButton icon={<FontAwesomeIcon icon={faIcons} />} />
        <DangerIconButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          processing
        />
      </div>
      <div className="slate flex gap-4 p-4">
        <PrimaryButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <SecondaryButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <DangerButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
          processing
        />
        <PrimaryPillButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <SecondaryPillButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
        />
        <DangerPillButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          content="Click Me!"
          processing
        />
        <PrimaryIconButton icon={<FontAwesomeIcon icon={faIcons} />} />
        <SecondaryIconButton icon={<FontAwesomeIcon icon={faIcons} />} />
        <DangerIconButton
          icon={<FontAwesomeIcon icon={faIcons} />}
          processing
        />
      </div>
      <div className="flex gap-4 p-4">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex gap-4">
            <PrimaryInput
              id="username"
              label="Username"
              placeholder="Create username"
            />
            <PrimaryInput id="password" label="Password" type="password" />
          </div>
          <div className="flex gap-4">
            <PrimaryInput id="birthdate" label="Birth Date" type="date" />
            <PrimaryInput id="birthTime" label="Birth Time" type="time" />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="datetime"
              label="Date & Time"
              type="datetime-local"
            />
            <PrimaryInput
              id="number"
              label="Number"
              type="number"
              min={0}
              max={100}
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="gender"
              label="Gender"
              type="dropdown"
              options={[
                { text: "Select gender", value: "" },
                { text: "Male", value: "male" },
                { text: "Female", value: "fmale" },
              ]}
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="caption"
              label="Caption"
              type="textarea"
              rows={5}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex gap-4">
            <PrimaryInput
              id="username"
              label="Username"
              placeholder="Create username"
              value="donjake"
              required
              disabled
            />
            <PrimaryInput
              id="password"
              label="Password"
              type="password"
              required
              disabled
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="birthdate"
              label="Birth Date"
              type="date"
              processing
            />
            <PrimaryInput
              id="birthTime"
              label="Birth Time"
              type="time"
              processing
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="datetime"
              label="Date & Time"
              type="datetime-local"
              processing
              disabled
            />
            <PrimaryInput
              id="number"
              label="Number"
              type="number"
              min={0}
              max={100}
              processing
              disabled
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="gender"
              label="Gender"
              value="male"
              type="dropdown"
              options={[
                { text: "Select gender", value: "" },
                { text: "Male", value: "male" },
                { text: "Female", value: "fmale" },
              ]}
              disabled
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="caption"
              label="Caption"
              value="asdasdasd asdasdasd"
              type="textarea"
              rows={5}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="slate flex gap-4 p-4">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex gap-4">
            <PrimaryInput
              id="username"
              label="Username"
              placeholder="Create username"
            />
            <PrimaryInput id="password" label="Password" type="password" />
          </div>
          <div className="flex gap-4">
            <PrimaryInput id="birthdate" label="Birth Date" type="date" />
            <PrimaryInput id="birthTime" label="Birth Time" type="time" />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="datetime"
              label="Date & Time"
              type="datetime-local"
            />
            <PrimaryInput
              id="number"
              label="Number"
              type="number"
              min={0}
              max={100}
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="gender"
              label="Gender"
              type="dropdown"
              options={[
                { text: "Select gender", value: "" },
                { text: "Male", value: "male" },
                { text: "Female", value: "fmale" },
              ]}
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="caption"
              label="Caption"
              type="textarea"
              rows={5}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex gap-4">
            <PrimaryInput
              id="username"
              label="Username"
              placeholder="Create username"
              value="donjake"
              required
              disabled
            />
            <PrimaryInput
              id="password"
              label="Password"
              type="password"
              required
              disabled
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="birthdate"
              label="Birth Date"
              type="date"
              processing
            />
            <PrimaryInput
              id="birthTime"
              label="Birth Time"
              type="time"
              processing
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="datetime"
              label="Date & Time"
              type="datetime-local"
              processing
              disabled
            />
            <PrimaryInput
              id="number"
              label="Number"
              type="number"
              min={0}
              max={100}
              processing
              disabled
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="gender"
              label="Gender"
              value="male"
              type="dropdown"
              options={[
                { text: "Select gender", value: "" },
                { text: "Male", value: "male" },
                { text: "Female", value: "fmale" },
              ]}
              disabled
            />
          </div>
          <div className="flex gap-4">
            <PrimaryInput
              id="caption"
              label="Caption"
              value="asdasdasd asdasdasd"
              type="textarea"
              rows={5}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
