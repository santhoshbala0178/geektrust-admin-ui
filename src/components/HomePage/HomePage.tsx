import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getUserData } from "../../utils/apiUtils";
import SearchBar from "../../components/SearchBar";
import UserTable from "../../components/UserTable";
import { setTotalPages, setUsers } from "../../actions";
import {
  HomePageContainer,
  ContentContainer,
  FooterContainer,
  PaginationContainer,
  DeleteContainer,
} from "./HomePage.style";
import PageNumber from "../PageNumber";
import DeleteButton from "../DeleteButton";
import { RootState } from "../../store";
import { PAGE_NUM_TYPES } from "../../constants/constants";

const mapDispatchToProps = {
  setUsersProp: setUsers,
  setTotalPagesProp: setTotalPages,
};

const mapStateToProps = (state: RootState) => ({
  pageDetailsReducer: state.pageDetailsReducer,
  userDetailsReducer: state.userDetailsReducer,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const HomePage = ({
  pageDetailsReducer,
  userDetailsReducer,
  setUsersProp,
  setTotalPagesProp,
}: Props) => {
  useEffect(() => {
    const getData = async () => {
      const data = await getUserData();
      setUsersProp(data);
      setTotalPagesProp(data.length);
    };

    getData();
  }, [setTotalPagesProp, setUsersProp]);

  useEffect(() => {
    // Set Total Pages if the users are deleted
    setTotalPagesProp(userDetailsReducer.users.length);
  }, [userDetailsReducer.users.length, setTotalPagesProp]);

  return (
    <HomePageContainer>
      <ContentContainer>
        <SearchBar />
        <UserTable />
        <FooterContainer>
          <DeleteContainer>
            <DeleteButton />
          </DeleteContainer>
          <PaginationContainer>
            <PageNumber type={PAGE_NUM_TYPES.FIRST_PAGE} />
            <PageNumber type={PAGE_NUM_TYPES.PREV_PAGE} />
            {Array(pageDetailsReducer.totalPage)
              .fill(0)
              .map((_, idx) => {
                return (
                  <PageNumber
                    key={`page-${idx + 1}`}
                    num={idx + 1}
                    type={PAGE_NUM_TYPES.PAGE_NUM}
                  />
                );
              })}
            <PageNumber type={PAGE_NUM_TYPES.NEXT_PAGE} />
            <PageNumber type={PAGE_NUM_TYPES.LAST_PAGE} />
          </PaginationContainer>
        </FooterContainer>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default connector(HomePage);
