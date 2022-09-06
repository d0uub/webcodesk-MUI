import isEqual from "lodash/isEqual";
import React from "react";
import { test2Types } from "./test2.props";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerStyle: {
    marginTop: "1em",
    marginBottom: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

/**
 * test2 is generated by Webcodesk. Replace this comment with a valuable description.
 */
class test2 extends React.Component {
  constructor(props) {
    super(props);
    const { inputText, styling } = this.props;
    this.state = {
      prevStyling: styling,
      rootStyle: { ...styling, ...styles.root },
      localInputText: inputText || "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.styling !== state.prevStyling) {
      const newRootStyle = { ...props.styling, ...styles.root };
      if (!isEqual(newRootStyle, state.rootStyle)) {
        return {
          prevStyling: props.styling,
          rootStyle: newRootStyle,
        };
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { localInputText, rootStyle } = this.state;
    const { data } = this.props;
    return (
      localInputText !== nextState.localInputText ||
      data !== nextProps.data ||
      rootStyle !== nextState.rootStyle
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { inputText } = this.props;
    const { localInputText } = this.state;
    if (inputText !== prevProps.inputText && localInputText !== inputText) {
      this.setState({
        localInputText: inputText || "",
      });
    }
  }

  handleChangeInputValue = (e) => {
    this.setState({
      localInputText: e.target.value,
    });
    this.props.onInputTextChange({
      enteredText: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onSubmit({
      enteredText: this.state.localInputText,
    });
  };

  render() {
    const { data, cells } = this.props;
    const { rootStyle, localInputText } = this.state;
    return (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "rgb(255, 255, 255)",
          boxShadow: "rgba(33, 41, 63, 0.1) 0px 0px 1px 1px",
          boxSizing: "border-box",
          display: "flex",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
          height: "80px",
          paddingBottom: "20px",
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "20px",
          position: "sticky",
          textSizeAdjust: "100%",
          top: "0px",
          width: "1903px",
          zIndex: 20,
          WebkitFontSmoothing: "antialiased",
        }}
        className={
          "styles_header__x7qVU style_flex___KlcI style_direction-row__oinjH style_flex-row-gap-5__S7uKU undefined style_flex-row-gap-widescreen-8__VUnTE style_py-5__LWEON style_px-mobile-5__1862E style_px-desktop-5__SfKuu style_px-widescreen-8__9oTJ5 style_px-tablet-5__y6qUx style_align-center__76pto style_bg-white__XxyB1"
        }
      >
        <a
          style={{
            cursor: "pointer",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
            textDecoration: "none",
          }}
          href={"/"}
        >
          <svg
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
            width={40}
            height={40}
            viewBox={"0 0 40 40"}
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <g
              style={{
                fill: "none",
                fillRule: "evenodd",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
              }}
              fill={"none"}
              fill-rule={"evenodd"}
            >
              <path
                style={{
                  fill: "rgb(218, 85, 47)",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                }}
                d={
                  "M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                }
                fill={"#DA552F"}
              ></path>
              <path
                style={{
                  fill: "rgb(255, 255, 255)",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                }}
                d={
                  "M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                }
                fill={"#FFF"}
              ></path>
            </g>
          </svg>
        </a>
        <div
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
            marginInlineStart: "32px",
            marginLeft: "32px",
            transitionDuration: "0.2s",
            transitionProperty: "width",
            transitionTimingFunction: "linear",
          }}
          className={"styles_container__8xTb_"}
        >
          <form
            style={{
              bottom: "0px",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
              insetInlineEnd: "0px",
              left: "0px",
              marginBlockEnd: "0px",
              marginBottom: "0px",
              marginInlineEnd: "5px",
              marginRight: "5px",
              position: "relative",
              right: "0px",
              top: "0px",
              width: "225px",
            }}
            className={"styles_form__18Uef"}
            method={"GET"}
            action={"/search?q="}
          >
            <label
              style={{
                borderBlockEndColor: "rgb(33, 41, 60)",
                borderBlockStartColor: "rgb(33, 41, 60)",
                borderBottomColor: "rgb(33, 41, 60)",
                borderInlineEndColor: "rgb(33, 41, 60)",
                borderInlineStartColor: "rgb(33, 41, 60)",
                borderLeftColor: "rgb(33, 41, 60)",
                borderRightColor: "rgb(33, 41, 60)",
                borderTopColor: "rgb(33, 41, 60)",
                caretColor: "rgb(33, 41, 60)",
                color: "rgb(33, 41, 60)",
                columnRuleColor: "rgb(33, 41, 60)",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                fontSize: "13px",
                fontVariant: "tabular-nums",
                fontVariantNumeric: "tabular-nums",
                lineHeight: "20px",
                outlineColor: "rgb(33, 41, 60)",
                textDecoration: "none solid rgb(33, 41, 60)",
                textDecorationColor: "rgb(33, 41, 60)",
                textEmphasisColor: "rgb(33, 41, 60)",
                WebkitTextFillColor: "rgb(33, 41, 60)",
                WebkitTextStrokeColor: "rgb(33, 41, 60)",
              }}
              className={
                "styles_font__m46I_ styles_black__Z9fG_ styles_small__lLD08 styles_normal__FGFK7 styles_lineHeight__kGlRn styles_underline__IqHIA"
              }
            >
              <svg
                style={{
                  bottom: "12px",
                  display: "block",
                  fill: "rgb(33, 41, 60)",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                  insetBlockEnd: "12px",
                  insetBlockStart: "12px",
                  insetInlineEnd: "193px",
                  insetInlineStart: "16px",
                  left: "16px",
                  overflowX: "hidden",
                  overflowY: "hidden",
                  position: "absolute",
                  right: "193px",
                  top: "12px",
                }}
                width={16}
                height={16}
                viewBox={"0 0 16 16"}
                xmlns={"http://www.w3.org/2000/svg"}
                className={"styles_searchIcon__TPOjO"}
              >
                <path
                  style={{
                    fill: "rgb(75, 88, 124)",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                    opacity: "0.5",
                  }}
                  d={
                    "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293L13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z"
                  }
                  fill={"#4B587C"}
                  opacity={"0.5"}
                ></path>
              </svg>
              <input
                style={{
                  appearance: "none",
                  backgroundColor: "rgb(245, 248, 255)",
                  borderBlockEndColor: "rgb(33, 41, 60)",
                  borderBlockEndStyle: "none",
                  borderBlockEndWidth: "0px",
                  borderBlockStartColor: "rgb(33, 41, 60)",
                  borderBlockStartStyle: "none",
                  borderBlockStartWidth: "0px",
                  borderBottomColor: "rgb(33, 41, 60)",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  borderBottomStyle: "none",
                  borderBottomWidth: "0px",
                  borderInlineEndColor: "rgb(33, 41, 60)",
                  borderInlineEndStyle: "none",
                  borderInlineEndWidth: "0px",
                  borderInlineStartColor: "rgb(33, 41, 60)",
                  borderInlineStartStyle: "none",
                  borderInlineStartWidth: "0px",
                  borderLeftColor: "rgb(33, 41, 60)",
                  borderLeftStyle: "none",
                  borderLeftWidth: "0px",
                  borderRightColor: "rgb(33, 41, 60)",
                  borderRightStyle: "none",
                  borderRightWidth: "0px",
                  borderTopColor: "rgb(33, 41, 60)",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  borderTopStyle: "none",
                  borderTopWidth: "0px",
                  color: "rgb(33, 41, 60)",
                  columnRuleColor: "rgb(33, 41, 60)",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                  fontSize: "13px",
                  fontVariant: "tabular-nums",
                  fontVariantNumeric: "tabular-nums",
                  height: "40px",
                  outlineColor: "rgb(33, 41, 60)",
                  paddingBottom: "0px",
                  paddingLeft: "40px",
                  paddingRight: "20px",
                  paddingTop: "0px",
                  textDecoration: "none solid rgb(33, 41, 60)",
                  textDecorationColor: "rgb(33, 41, 60)",
                  width: "220px",
                }}
                autoComplete={"off"}
                className={"styles_input__YwRXC"}
                data-test={"search-input"}
                placeholder={data.placeholder}
                title={"Search"}
              ></input>
            </label>
          </form>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexBasis: "0%",
            flexGrow: 1,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
            marginInlineStart: "32px",
            marginLeft: "32px",
          }}
          className={
            "styles_hideOnSearch__imbb4 style_flex___KlcI style_direction-row__oinjH style_flex-row-gap-5__S7uKU undefined style_flex-row-gap-widescreen-8__VUnTE style_flex-1__YfiEx"
          }
        >
          {cells &&
          cells.map((item, itemIdx) => {
            return (
              <div
              style={{
                bottom: "0px",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                insetInlineStart: "0px",
                left: "0px",
                marginInlineStart: "32px",
                marginLeft: "32px",
                position: "relative",
                right: "0px",
                top: "0px",
                zIndex: 100,
              }}
              className={"styles_navLink__NXAo6"}
            >
              <a
                style={{
                  borderBlockEndColor: "rgb(75, 88, 124)",
                  borderBlockStartColor: "rgb(75, 88, 124)",
                  borderBottomColor: "rgb(75, 88, 124)",
                  borderInlineEndColor: "rgb(75, 88, 124)",
                  borderInlineStartColor: "rgb(75, 88, 124)",
                  borderLeftColor: "rgb(75, 88, 124)",
                  borderRightColor: "rgb(75, 88, 124)",
                  borderTopColor: "rgb(75, 88, 124)",
                  caretColor: "rgb(75, 88, 124)",
                  color: "rgb(75, 88, 124)",
                  columnRuleColor: "rgb(75, 88, 124)",
                  cursor: "pointer",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                  lineHeight: "24px",
                  outlineColor: "rgb(75, 88, 124)",
                  textDecoration: "none",
                  textDecorationColor: "rgb(75, 88, 124)",
                  textEmphasisColor: "rgb(75, 88, 124)",
                  WebkitTextFillColor: "rgb(75, 88, 124)",
                  WebkitTextStrokeColor: "rgb(75, 88, 124)",
                }}
                className={
                  "style_color-light-grey__mkoQQ style_fontSize-16__DCrgA style_fontWeight-400__5p97M"
                }
                href={item.URL}
              >
                {item.title}
                </a>
              </div>
            );
          })}

        </div>
        <div
          style={{
            alignItems: "center",
            boxSizing: "border-box",
            display: "flex",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
            marginInlineStart: "32px",
            marginLeft: "32px",
          }}
          className={
            "styles_hideOnSearch__imbb4 style_flex___KlcI style_direction-row__oinjH style_flex-row-gap-5__S7uKU undefined style_flex-row-gap-widescreen-8__VUnTE style_align-center__76pto"
          }
        >
          <div
            style={{
              bottom: "0px",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
              left: "0px",
              position: "relative",
              right: "0px",
              top: "0px",
              zIndex: 100,
            }}
            className={"styles_navLink__NXAo6"}
          >
            <a
              style={{
                borderBlockEndColor: "rgb(75, 88, 124)",
                borderBlockStartColor: "rgb(75, 88, 124)",
                borderBottomColor: "rgb(75, 88, 124)",
                borderInlineEndColor: "rgb(75, 88, 124)",
                borderInlineStartColor: "rgb(75, 88, 124)",
                borderLeftColor: "rgb(75, 88, 124)",
                borderRightColor: "rgb(75, 88, 124)",
                borderTopColor: "rgb(75, 88, 124)",
                caretColor: "rgb(75, 88, 124)",
                color: "rgb(75, 88, 124)",
                columnRuleColor: "rgb(75, 88, 124)",
                cursor: "pointer",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                lineHeight: "24px",
                outlineColor: "rgb(75, 88, 124)",
                textDecoration: "none",
                textDecorationColor: "rgb(75, 88, 124)",
                textEmphasisColor: "rgb(75, 88, 124)",
                WebkitTextFillColor: "rgb(75, 88, 124)",
                WebkitTextStrokeColor: "rgb(75, 88, 124)",
              }}
              className={
                "style_color-light-grey__mkoQQ style_fontSize-16__DCrgA style_fontWeight-400__5p97M"
              }
              href={"/launch"}
            >
              How to post a product?
            </a>
          </div>
          <div
            style={{
              bottom: "0px",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
              insetInlineStart: "0px",
              left: "0px",
              marginInlineStart: "32px",
              marginLeft: "32px",
              position: "relative",
              right: "0px",
              top: "0px",
              zIndex: 100,
            }}
            className={"styles_navLink__NXAo6"}
          >
            <button
              style={{
                appearance: "button",
                backgroundColor: "rgba(0, 0, 0, 0)",
                backgroundPosition: "0px 0px",
                borderBlockEndStyle: "none",
                borderBlockEndWidth: "0px",
                borderBlockStartStyle: "none",
                borderBlockStartWidth: "0px",
                borderBottomStyle: "none",
                borderBottomWidth: "0px",
                borderInlineEndStyle: "none",
                borderInlineEndWidth: "0px",
                borderInlineStartStyle: "none",
                borderInlineStartWidth: "0px",
                borderLeftStyle: "none",
                borderLeftWidth: "0px",
                borderRightStyle: "none",
                borderRightWidth: "0px",
                borderTopStyle: "none",
                borderTopWidth: "0px",
                cursor: "pointer",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                fontSize: "16px",
                paddingBottom: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
                paddingTop: "0px",
                textAlign: "left",
              }}
              type={"button"}
              className={"styles_textButton__q4xv1 styles_left__i0IgN"}
            >
              <div
                style={{
                  borderBlockEndColor: "rgb(75, 88, 124)",
                  borderBlockStartColor: "rgb(75, 88, 124)",
                  borderBottomColor: "rgb(75, 88, 124)",
                  borderInlineEndColor: "rgb(75, 88, 124)",
                  borderInlineStartColor: "rgb(75, 88, 124)",
                  borderLeftColor: "rgb(75, 88, 124)",
                  borderRightColor: "rgb(75, 88, 124)",
                  borderTopColor: "rgb(75, 88, 124)",
                  caretColor: "rgb(75, 88, 124)",
                  color: "rgb(75, 88, 124)",
                  columnRuleColor: "rgb(75, 88, 124)",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                  lineHeight: "24px",
                  outlineColor: "rgb(75, 88, 124)",
                  textDecoration: "none solid rgb(75, 88, 124)",
                  textDecorationColor: "rgb(75, 88, 124)",
                  textEmphasisColor: "rgb(75, 88, 124)",
                  WebkitTextFillColor: "rgb(75, 88, 124)",
                  WebkitTextStrokeColor: "rgb(75, 88, 124)",
                }}
                className={
                  "style_color-light-grey__mkoQQ style_fontSize-16__DCrgA style_fontWeight-400__5p97M"
                }
              >
                Sign in
              </div>
            </button>
          </div>
          <button
            style={{
              appearance: "none",
              backgroundColor: "rgb(246, 73, 0)",
              borderBlockEndColor: "rgba(0, 0, 0, 0)",
              borderBlockEndStyle: "solid",
              borderBlockEndWidth: "1px",
              borderBlockStartColor: "rgba(0, 0, 0, 0)",
              borderBlockStartStyle: "solid",
              borderBlockStartWidth: "1px",
              borderBottomColor: "rgba(0, 0, 0, 0)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderInlineEndColor: "rgba(0, 0, 0, 0)",
              borderInlineEndStyle: "solid",
              borderInlineEndWidth: "1px",
              borderInlineStartColor: "rgba(0, 0, 0, 0)",
              borderInlineStartStyle: "solid",
              borderInlineStartWidth: "1px",
              borderLeftColor: "rgba(0, 0, 0, 0)",
              borderLeftStyle: "solid",
              borderLeftWidth: "1px",
              borderRightColor: "rgba(0, 0, 0, 0)",
              borderRightStyle: "solid",
              borderRightWidth: "1px",
              borderTopColor: "rgba(0, 0, 0, 0)",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              bottom: "0px",
              caretColor: "rgb(255, 255, 255)",
              color: "rgb(255, 255, 255)",
              columnRuleColor: "rgb(255, 255, 255)",
              cursor: "pointer",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
              fontSize: "14px",
              fontWeight: 600,
              insetInlineStart: "0px",
              left: "0px",
              lineHeight: "24px",
              marginInlineStart: "32px",
              marginLeft: "32px",
              outlineColor: "rgb(255, 255, 255)",
              paddingBottom: "8px",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "8px",
              position: "relative",
              right: "0px",
              textDecoration: "none solid rgb(255, 255, 255)",
              textDecorationColor: "rgb(255, 255, 255)",
              textEmphasisColor: "rgb(255, 255, 255)",
              top: "0px",
              transitionDuration: "0.3s",
              WebkitTextFillColor: "rgb(255, 255, 255)",
              WebkitTextStrokeColor: "rgb(255, 255, 255)",
            }}
            type={"button"}
            data-test={"login-button"}
            className={
              "styles_reset__opz7w styles_button__zKntg styles_primary___QHcD"
            }
          >
            <div
              style={{
                borderBlockEndColor: "rgb(255, 255, 255)",
                borderBlockStartColor: "rgb(255, 255, 255)",
                borderBottomColor: "rgb(255, 255, 255)",
                borderInlineEndColor: "rgb(255, 255, 255)",
                borderInlineStartColor: "rgb(255, 255, 255)",
                borderLeftColor: "rgb(255, 255, 255)",
                borderRightColor: "rgb(255, 255, 255)",
                borderTopColor: "rgb(255, 255, 255)",
                bottom: "0px",
                caretColor: "rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                columnRuleColor: "rgb(255, 255, 255)",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                fontSize: "14px",
                fontWeight: 600,
                left: "0px",
                outlineColor: "rgb(255, 255, 255)",
                position: "relative",
                right: "0px",
                textDecoration: "none solid rgb(255, 255, 255)",
                textDecorationColor: "rgb(255, 255, 255)",
                textEmphasisColor: "rgb(255, 255, 255)",
                top: "0px",
                zIndex: 2,
                WebkitTextStrokeColor: "rgb(255, 255, 255)",
              }}
            >
              Sign up
            </div>
          </button>
        </div>
      </div>
    );
  }
}

test2.propTypes = test2Types;

test2.defaultProps = {
  styling: {
    padding: "1em",
    margin: "4em",
    borderColor: "#cdcdcd",
    borderWidth: "2px",
    borderStyle: "dotted",
  },
  data: {
    title: "Empty Title Value",
    placeholder: "Enter text",
    inputText: "",
    inputObject: {},
    inputArray: [],
  },
  cells: [{title:"menu",url:"/"}],
  onInputTextChange: () => {
    console.info("test2.onInputTextChange is not set");
  },
  onSubmit: () => {
    console.info("test2.onSubmit is not set");
  },
};

export default test2;
