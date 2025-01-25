import "./style.scss";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit";
  icon?: ReactNode;
  content?: string;
  expand?: boolean;
  processing?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PrimaryButton = ({
  type = "button",
  icon,
  content,
  expand,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn${expand ? "-expanded" : ""} btn-primary`}
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
      {content ? (
        <span className="content-wrapper">
          {processing ? (icon ? content : "Processing...") : content}
        </span>
      ) : null}
    </button>
  );
};

export const PrimaryIconButton = ({
  type = "button",
  icon,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className="btn btn-icon-primary"
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
    </button>
  );
};

export const PrimaryPillButton = ({
  type = "button",
  icon,
  content,
  expand,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn${expand ? "-expanded" : ""} btn-pill-primary`}
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
      {content ? (
        <span className="content-wrapper">
          {processing ? (icon ? content : "Processing...") : content}
        </span>
      ) : null}
    </button>
  );
};

export const SecondaryButton = ({
  type = "button",
  icon,
  content,
  expand,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn${expand ? "-expanded" : ""} btn-secondary`}
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
      {content ? (
        <span className="content-wrapper">
          {processing ? (icon ? content : "Processing...") : content}
        </span>
      ) : null}
    </button>
  );
};

export const SecondaryIconButton = ({
  type = "button",
  icon,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className="btn btn-icon-secondary"
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
    </button>
  );
};

export const SecondaryPillButton = ({
  type = "button",
  icon,
  content,
  expand,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn${expand ? "-expanded" : ""} btn-pill-secondary`}
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
      {content ? (
        <span className="content-wrapper">
          {processing ? (icon ? content : "Processing...") : content}
        </span>
      ) : null}
    </button>
  );
};

export const DangerButton = ({
  type = "button",
  icon,
  content,
  expand,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn${expand ? "-expanded" : ""} btn-danger`}
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
      {content ? (
        <span className="content-wrapper">
          {processing ? (icon ? content : "Processing...") : content}
        </span>
      ) : null}
    </button>
  );
};

export const DangerIconButton = ({
  type = "button",
  icon,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className="btn btn-icon-danger"
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
    </button>
  );
};

export const DangerPillButton = ({
  type = "button",
  icon,
  content,
  expand,
  processing,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn${expand ? "-expanded" : ""} btn-pill-danger`}
      type={type}
      disabled={processing || disabled}
      onClick={!processing && !disabled ? onClick : undefined}
    >
      {icon ? (
        <span className={`icon-wrapper ${processing ? "animate-spin" : ""}`}>
          {processing ? <FontAwesomeIcon icon={faSpinner} /> : icon}
        </span>
      ) : null}
      {content ? (
        <span className="content-wrapper">
          {processing ? (icon ? content : "Processing...") : content}
        </span>
      ) : null}
    </button>
  );
};
