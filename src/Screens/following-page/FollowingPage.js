import React, { useEffect, useState } from 'react';
import kabadi from 'assets/images/kabadi.svg';
import swimmingpool from 'assets/images/swimmingpool.png';
import cricket from 'assets/images/cricket.svg';
import python from 'assets/images/python.png';
import java from 'assets/images/javaa.png';
import react from 'assets/images/react.png';
import Pill from 'common-components/Pill';
import { PillBlock } from '../welcome/Welcome.Style';
import {
  MainBlock,
  GlobalInterest,
  LeadingWriters,
  MyInterests,
  PageTitle,
  ExploreInterests,
  InterestTitle,
  CategoryBlock,
  Category,
  CategoryImg,
  CategoryNameBlock,
  CategoryName,
  FollowButton,
} from './FollowingPage.style';

const FollowingPage = () => {
  const values = [];
  const [margins, setMargins] = useState([]);
  const [overAllMargins, setOverAllMargins] = useState([]);
  const [interests, setInterests] = useState([
    {
      name: 'Sports',
      categoryList: [
        {
          categoryName: 'Kabadi',
          imagePath: kabadi,
          isHovered: false,
          isClicked: false,
        },
        {
          categoryName: 'Swimming',
          imagePath: swimmingpool,
          isHovered: false,
          isClicked: false,
        },
        {
          categoryName: 'Cricket',
          imagePath: cricket,
          isHovered: false,
          isClicked: false,
        },
        {
          categoryName: 'Tennis',
          imagePath: swimmingpool,
          isHovered: false,
          isClicked: false,
        },
      ],
    },
    {
      name: 'Programming',
      categoryList: [
        {
          categoryName: 'Python',
          imagePath: python,
          isHovered: false,
          isClicked: false,
        },
        {
          categoryName: 'Java',
          imagePath: java,
          isHovered: false,
          isClicked: false,
        },
        {
          categoryName: 'ReactJs',
          imagePath: react,
          isHovered: false,
          isClicked: false,
        },
      ],
    },
  ]);
  const [pills, setPills] = useState([
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 1,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 2,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 3,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 4,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 5,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 6,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 7,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 8,
    },
    {
      value: ' விளையாட்டு ',
      isSelected: true,
      id: 9,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 11,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 12,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 13,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 14,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 15,
    },
    {
      value: ' விளையாட்டு ',
      isSelected: true,
      id: 16,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 17,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 18,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 19,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 20,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 21,
    },
    {
      value: ' விளையாட்டு ',
      isSelected: true,
      id: 22,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 23,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 24,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 25,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 26,
    },
  ]);

  const generateMargins = (position) => {
    values.push(position);
    if (values.length === pills.length) {
      setOverAllMargins(values);
    }
  };

  const getInterestPills = () => {
    return pills.map(({ value, isSelected, id }, index) => (
      <Pill
        position={index}
        key={id}
        calculateMargins={generateMargins}
        margins={margins}
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

  const OnSelectInterest = (categoryName, interestName) => {
    const updatedCategory = interests.map((interest) => {
      if (interest.name === interestName) {
        const updatedInterest = interest.categoryList.map((category) => {
          if (category.categoryName === categoryName) {
            return { ...category, isClicked: !category.isClicked };
          }
          return category;
        });
        return { ...interest, categoryList: updatedInterest };
      }
      return interest;
    });
    setInterests(updatedCategory);
  };

  useEffect(() => {
    if (overAllMargins.length === pills.length) {
      let lastPosition = 0;
      const defaultMargin = 46;
      const marginLeftsWithoutOddOrEven = overAllMargins.map((singlePillPosition) => {
        if (singlePillPosition > lastPosition) {
          lastPosition = singlePillPosition;
          return defaultMargin;
        }
        lastPosition = singlePillPosition;
        return 100;
      });
      let count = 1;
      const updatedMargins = marginLeftsWithoutOddOrEven.map((singlePosition, index) => {
        if (index === 0) {
          return 100;
        }
        if (singlePosition === defaultMargin) {
          return defaultMargin;
        }
        if (singlePosition > defaultMargin) {
          count += 1;
          if (count % 2 !== 0) {
            return 100;
          }
          return defaultMargin;
        }
        return defaultMargin;
      });
      setMargins(updatedMargins);
    }
  }, [overAllMargins, pills]);

  return (
    <div style={{ width: 1260 }}>
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
          <For each="interest" of={interests}>
            <InterestTitle key={interest.name}>{interest.name}</InterestTitle>
            <CategoryBlock>
              <For each="category" of={interest.categoryList}>
                <Category key={category.categoryName}>
                  <CategoryImg src={category.imagePath} />
                  <CategoryNameBlock id="categoryNameBlock">
                    <CategoryName>{category.categoryName}</CategoryName>
                    <FollowButton
                      onClick={() => OnSelectInterest(category.categoryName, interest.name)}
                      isClicked={category.isClicked}
                    />
                  </CategoryNameBlock>
                </Category>
              </For>
            </CategoryBlock>
          </For>
        </ExploreInterests>
      </MainBlock>
    </div>
  );
};

export default FollowingPage;
