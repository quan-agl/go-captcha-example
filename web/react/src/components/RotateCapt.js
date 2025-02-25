import React from 'react'
import GoCaptcha from 'go-captcha-react'
import { Popover } from 'antd';
import {useRotateHandler} from "../hooks/useRotateHandler";

function RotateCapt() {
  const handler = useRotateHandler({
    getApi: "/api/go-captcha-data/rotate-basic",
    checkApi: "/api/go-captcha-check-data/rotate-basic"
  })

  return (
    <Popover
      content={
        <GoCaptcha.Rotate
          config={{
            width: 300,
            height: 240,
            size: 240,
            showTheme: false,
            verticalPadding: 5,
            horizontalPadding: 5,
          }}
          data={handler.data}
          events={{
            close: handler.closeEvent,
            refresh: handler.refreshEvent,
            confirm: handler.confirmEvent,
          }}
        />
      }
      open={handler.state.popoverVisible}
      onOpenChange={handler.visibleChangeEvent}
      forceRender={true}
      trigger="click">
      <GoCaptcha.Button {...handler.state} clickEvent={handler.clickEvent} title={"点击进行滑动旋转校验"}/>
    </Popover>
  );
}

export default RotateCapt;
