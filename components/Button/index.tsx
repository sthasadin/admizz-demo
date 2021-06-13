import { Button as ButtonComponent } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

type ButtonType = "secondary" | "primary" | "default";

export interface Props {
  type?: ButtonType;
  className?: any;
  disabled?: boolean;
  htmlType?: "submit" | "button" | "reset";
  loading?: boolean;
  size?: "small" | "middle" | "large";
  margin?: any;
  shape?: "circle" | "circle-outline" | "round";
  ghost?: boolean;
  icon?: any;
  prefix?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  background?: string;
  fullWidth?: boolean;
}

const Button: React.FC<Props> = ({
  type = "primary",
  onClick,
  margin,
  size,
  icon,
  className,
  htmlType,
  children,
  fullWidth,
  loading,
}) => {
  const useStyles = makeStyles(() => {
    return {
      button: {
        position: "relative",
        whiteSpace: "nowrap",
        "& .ant-btn-primary": {
          border: "none",
          borderColor: "none",
        },
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: 10,
        border: "none",
        background: ({ type }: Props) => {
          switch (type) {
            case "primary":
              return "#5F1802";
            case "default":
              return "#009688";
            default:
              return "#5F1802";
          }
        },
        margin: ({ margin }: Props) => {
          return margin;
        },
        "&:focus": {
          background: ({ type }: Props) => {
            switch (type) {
              case "default":
                return "#9C27B0";
              case "primary":
                return "#009688";
              default:
                return "#009688";
            }
          },
          color: "#ffffff",
        },
        "&:active": {
          background: ({ type }: Props) => {
            switch (type) {
              case "default":
                return "#009688";
              case "primary":
                return "#5F1802";
              default:
                return "#009688";
            }
          },
          color: "#ffffff",
        },
        "&:hover": {
          background: ({ type }: Props) => {
            switch (type) {
              case "default":
                return "#5F1802";
              case "primary":
                return "#5F1802";
              default:
                return "#5F1802";
            }
          },
          color: "#ffffff",
        },
        color: ({ type }: Props) => {
          switch (type) {
            case "secondary":
              return "#5F1802";
            case "primary":
              return "#ffffff";
            case "default":
              return "#ffffff";
            default:
              return "#ffffff";
          }
        },
        borderColor: ({ type }: Props) => {
          switch (type) {
            case "default":
              return "#9C27B0";
            default:
              return "#009688";
          }
        },
        padding: ({ size }: Props) => {
          switch (size) {
            case "small":
              return "9px 24px 9px 24px";
            case "middle":
              return "15px 36px 15px 36px";
            case "large":
              return "17.5px 114px 17.5px 114px";
            default:
              return "15px 36px 15px 36px";
          }
        },
        maxWidth: ({ size }: Props) => {
          switch (size) {
            case "small":
              return 48;
            case "middle":
              return 252;
            case "large":
              return 331;

            default:
              return 252;
          }
        },
        fontSize: ({ size }: Props) => {
          switch (size) {
            case "small":
              return 18;
            case "middle":
              return 18;
            case "large":
              return 18;
            default:
              return 14;
          }
        },
        fontWeight: "bold",
        height: "auto",
      },
    };
  });
  const classes = useStyles({ type, margin, size });

  return (
    <ButtonComponent
      className={`${classes.button} ${className}`}
      variant="contained"
      onClick={onClick}
      fullWidth={fullWidth}
      type={htmlType}
    >
      {loading && (
        <CircularProgress
          size={20}
          style={{ marginRight: 10, color: "#fff" }}
        />
      )}
      {children}
    </ButtonComponent>
  );
};

export { Button };
