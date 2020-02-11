import React, { Component, ReactElement } from "react";
import PropTypes from "prop-types";
import RouteContext from "@ant-design/pro-layout/es/RouteContext";
import { ModalProps } from "antd/es/modal";
import { Modal, Icon } from "antd";
import "./model.scss";
export default class InlineModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.visible,
      fullScreen: props.fullScreen
    };
  }

  // 显示模态框
  showModalHandler = e => {
    e.stopPropagation();
    const { beforeOpen } = this.props;
    if (beforeOpen) {
      beforeOpen();
    }
    this.handleModalVisible(true);
  };

  // 隐藏模态框
  hideModalHandler = () => {
    const { beforeClose } = this.props;
    if (beforeClose) {
      beforeClose();
    }
    this.handleModalVisible(false);
  };

  handleModalVisible = flag => {
    this.setState({
      visible: !!flag
    });
  };

  okHandler = e => {
    e.stopPropagation();
    const { onOk } = this.props;
    if (onOk) {
      const ret = onOk(e);
      // @ts-ignore
      if (ret instanceof Promise) {
        ret
          .then(() => {
            this.hideModalHandler();
          })
          .catch(err => {
            console.error(err);
          });
        // @ts-ignore
      } else if (ret) {
        this.hideModalHandler();
      }
    } else {
      this.hideModalHandler();
    }
  };

  cancelHandler = e => {
    e.stopPropagation();
    const { onCancel } = this.props;
    if (onCancel) {
      const ret = onCancel(e);
      // @ts-ignore
      if (ret instanceof Promise) {
        ret
          .then(() => {
            this.hideModalHandler();
          })
          .catch(() => {});
      } else {
        this.hideModalHandler();
      }
    } else {
      this.hideModalHandler();
    }
  };

  toggleFullScreen = () => {
    const { fullScreen } = this.state;
    this.setState({
      fullScreen: !fullScreen
    });
  };

  titleRender = () => {
    const { title, maxmin } = this.props;
    const { fullScreen } = this.state;

    return (
      <>
        {title}
        {maxmin && (
          <button
            type="button"
            className="ant-modal-close"
            style={{ right: 42 }}
            onClick={this.toggleFullScreen}
          >
            <span className="ant-modal-close-x">
              <Icon
                className="ant-modal-close-icon"
                type={fullScreen ? "shrink" : "arrows-alt"}
              />
            </span>
          </button>
        )}
      </>
    );
  };

  render() {
    const {
      children,
      title,
      element,
      onCancel,
      onOk,
      maxmin,
      fullScreen: f,
      ...rest
    } = this.props;
    const { footer } = rest;
    const { visible, fullScreen } = this.state;
    return (
      <RouteContext.Consumer>
        {({
          // @ts-ignore
          tabsView,
          fixedHeader
        }) => (
          <>
            {element &&
              React.cloneElement(element, { onClick: this.showModalHandler })}
            {/* wrapped in span to stop event propagation when it's in a table
                of which expandRowByClick is true */}
            <span onClick={e => e.stopPropagation()}>
              <Modal
                wrapClassName={`wm-modal-wrap${
                  fullScreen ? " wm-modal-wrap-fullscreen" : ""
                }${footer === false ? " wm-modal-wrap-nofooter" : ""}`}
                title={this.titleRender()}
                visible={visible}
                centered
                onOk={this.okHandler}
                onCancel={this.cancelHandler}
                getContainer={
                  (tabsView &&
                    fixedHeader &&
                    document.querySelector(
                      ".ant-tabs-tabpane.ant-tabs-tabpane-active"
                    )) ||
                  undefined
                }
                {...rest}
              >
                {children}
              </Modal>
            </span>
          </>
        )}
      </RouteContext.Consumer>
    );
  }
}

InlineModal.propTypes = {
  element: PropTypes.element,
  maxmin: PropTypes.bool,
  fullScreen: PropTypes.bool,
  beforeOpen: PropTypes.func,
  beforeClose: PropTypes.func
};

InlineModal.defaultProps = {
  maxmin: true,
  fullScreen: false
};
