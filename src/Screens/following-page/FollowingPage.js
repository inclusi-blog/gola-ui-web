import React, { useEffect, useState } from 'react';
import ExplorePill from 'common-components/ExplorePill';
import { RESPONSE_STATUSES } from '../../constants/CommonConstants';
import { PillBlock } from '../welcome/Welcome.Style';
import { FollowInterest, GetCategoriesAndInterests, GetUserFollowingInterest } from './follow.service';
import {
  MainBlock,
  GlobalInterest,
  LeadingWriters,
  MyInterests,
  PageTitle,
  ExploreInterests,
  InterestTitle,
  InterestBorder,
  CategoryBlock,
  Category,
  CategoryImg,
  CategoryNameBlock,
  CategoryName,
  FollowButton,
} from './FollowingPage.style';

const FollowingPage = () => {
  const [categories, setCategories] = useState([]);
  const [pills, setPills] = useState([]);

  useEffect(() => {
    GetCategoriesAndInterests()
      .then(({ data }) => {
        setCategories(
          data.map(({ category, interests }) => {
            return {
              name: category,
              interestList: interests.map((interest) => {
                return {
                  interestName: interest.name,
                  imagePath: interest.image,
                  isHovered: false,
                  isClicked: interest.isFollowedByUser,
                };
              }),
            };
          })
        );
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
      });
    GetUserFollowingInterest()
      .then(({ data }) => {
        const fetchedPills = data.map((interestName, index) => {
          return {
            value: interestName,
            isSelected: true,
            id: index + 1,
          };
        });
        setPills(fetchedPills);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong while fetching user following interest !! ', err);
      });
  }, []);

  const getInterestPills = () => {
    return pills.map(({ value, isSelected, id }) => (
      <ExplorePill
        interest={value}
        isSelected={isSelected}
        onSelectInterest={(selectedId) => {
          const updatedPills = pills.map((singlePill) =>
            singlePill.id === selectedId ? { ...singlePill, isSelected: !singlePill.isSelected } : singlePill
          );
          setPills(updatedPills);
        }}
        id={id}
      />
    ));
  };

  const OnSelectInterest = (interestName, categoryName) => {
    FollowInterest(interestName)
      .then(({ data }) => {
        if (data.status === RESPONSE_STATUSES.SUCCESS) {
          const updatedCategory = categories.map((category) => {
            if (category.name === categoryName) {
              const updatedInterest = category.interestList.map((interest) => {
                if (interest.interestName === interestName) {
                  return { ...interest, isClicked: !interest.isClicked };
                }
                return interest;
              });
              return { ...category, interestList: updatedInterest };
            }
            return category;
          });
          setCategories(updatedCategory);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('something went wrong', err);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MainBlock>
        <GlobalInterest>
          <p>This block has Global interest</p>
        </GlobalInterest>
        <LeadingWriters>
          <p>This block has Leading writers of the week</p>
        </LeadingWriters>
        <MyInterests>
          <PageTitle>Your interests</PageTitle>
          <PillBlock>{getInterestPills()}</PillBlock>
        </MyInterests>
        <ExploreInterests>
          <PageTitle>Explore Interests</PageTitle>
          {categories.map((category) => {
            return (
              <>
                <InterestTitle>{category.name}</InterestTitle>
                <InterestBorder />
                <CategoryBlock>
                  {category.interestList.map((interest) => {
                    return (
                      <Category>
                        <CategoryImg src={interest.imagePath} />
                        <CategoryNameBlock id="interestNameBlock">
                          <CategoryName>{interest.interestName}</CategoryName>
                          <FollowButton
                            onClick={() => OnSelectInterest(interest.interestName, category.name)}
                            isClicked={interest.isClicked}
                          />
                        </CategoryNameBlock>
                      </Category>
                    );
                  })}
                </CategoryBlock>
              </>
            );
          })}
        </ExploreInterests>
      </MainBlock>
    </div>
  );
};

export default FollowingPage;
