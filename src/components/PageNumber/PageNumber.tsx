import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { setCurrentPage } from "../../actions";
import { PAGE_NUM_TYPES } from "../../constants/constants";
import { RootState } from "../../store";
import { PageNumberButton } from "./PageNumber.style";
import { PageNumberType } from "./PageNumberType.type";

const mapDispatchToProps = {
  setCurrentPageProp: setCurrentPage,
};

const mapStateToProps = (state: RootState) => ({
  pageDetailsReducer: state.pageDetailsReducer,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & PageNumberType;

const PageNumber = ({
  num,
  type,
  pageDetailsReducer,
  setCurrentPageProp,
}: Props) => {
  const [displayText, setDisplayText] = useState("");

  const onPageClick = () => {
    switch (type) {
      case PAGE_NUM_TYPES.FIRST_PAGE:
        setCurrentPageProp(1);
        break;
      case PAGE_NUM_TYPES.PREV_PAGE:
        setCurrentPageProp(pageDetailsReducer.curPageNum - 1);
        break;
      case PAGE_NUM_TYPES.NEXT_PAGE:
        setCurrentPageProp(pageDetailsReducer.curPageNum + 1);
        break;
      case PAGE_NUM_TYPES.LAST_PAGE:
        setCurrentPageProp(pageDetailsReducer.totalPage);
        break;
      case PAGE_NUM_TYPES.PAGE_NUM:
        if (num) {
          // Only for page numbers
          setCurrentPageProp(num);
        }
        break;
      default:
        console.log("Not valid Page type");
    }
  };

  const getDisabledState = () => {
    switch (type) {
      case PAGE_NUM_TYPES.FIRST_PAGE:
      case PAGE_NUM_TYPES.PREV_PAGE:
        return pageDetailsReducer.curPageNum === 1;
      case PAGE_NUM_TYPES.NEXT_PAGE:
      case PAGE_NUM_TYPES.LAST_PAGE:
        return pageDetailsReducer.curPageNum === pageDetailsReducer.totalPage;
      default:
        return false;
    }
  };

  useEffect(() => {
    if (num) {
      setDisplayText(num.toString());
    } else {
      switch (type) {
        case PAGE_NUM_TYPES.FIRST_PAGE:
          setDisplayText("<<");
          break;
        case PAGE_NUM_TYPES.PREV_PAGE:
          setDisplayText("<");
          break;
        case PAGE_NUM_TYPES.NEXT_PAGE:
          setDisplayText(">");
          break;
        case PAGE_NUM_TYPES.LAST_PAGE:
          setDisplayText(">>");
          break;
      }
    }
  }, []);

  return (
    <PageNumberButton
      onClick={onPageClick}
      isSelected={num ? num === pageDetailsReducer.curPageNum : false}
      disabled={getDisabledState()}
    >
      {displayText}
    </PageNumberButton>
  );
};

export default connector(PageNumber);
