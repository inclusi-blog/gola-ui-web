import React, {useEffect, useState} from 'react';
import {
    CenterAlign, ImageLabel,
    LinkStyle,
    MainProfileContainer,
    PageDescription,
    ProfileUpload,
    ProfileUploadContainer, ProfileUploadIcon,
    ProfileWrapper,
    SaveButton,
    SaveLabel,
    UserName,
    UserNameTag
} from "./UserProfilePage.style";
import PropTypes from "prop-types";
import {
    editUserProfileDetails,
    GetPreSignProfilePictureURL, GetProfilePicture,
    getUserProfileDetails, SyncProfilePicture,
    UploadProfilePicture
} from "./userprofile.service";
import ProfileDisplayContainer from "./ProfileDisplayContainer";
import ProfileEditContainer from "./ProfileEditContainer";
import ProfilePicUploadIcon from "assets/images/profilePicUploadIcon.svg";
import DefaultProfilePicture from "assets/images/DefaultProfilePicture.svg";

const UserProfilePage = () => {
    const [profileDetails, setProfileDetails] = useState({});
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [profileDetailsInEdit,setProfileDetailsInEdit] = useState({});
    const [selectedFile, setSelectedFile] = useState(DefaultProfilePicture);

    const onUploadProfilePicture = (event) => {
        const file = event.target.files[0];
        const fileExtension = file.name.split('.').pop();
        GetPreSignProfilePictureURL(fileExtension).then(({data})=>{
            UploadProfilePicture(data.url, file).then(()=>{
                const url = data.url.split('?')[0];
                const urlPaths = url.split('/');
                const uploadID = urlPaths.slice(urlPaths.length - 2);
                SyncProfilePicture(uploadID.join('/')).then(()=>{
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        setSelectedFile(event.target.result);
                    };
                    reader.readAsDataURL(file);
                }).catch((err)=>{
                    console.log(err);
                })
            }).catch((err)=>{
                console.log(err);
            });
        }).catch((err)=>{
            console.log(err);
        });
    };

    const onEditProfile = () => {
        setIsEditProfile(true);
    };

    const onSaveProfile = () => {
        const difference = (obj1, obj2) => {
            let diff = {};
            Object.keys(obj1).forEach(key => {
                if(obj1[key] !== obj2[key]){
                    diff={...diff,[key]:obj2[key]};
                }
            });
            return diff;
        };

        const FieldsToUpdate = difference(profileDetails,profileDetailsInEdit);
        editUserProfileDetails(FieldsToUpdate).then(()=>{
            setProfileDetails(profileDetailsInEdit);
        }).catch((err)=>{
            console.log("unable to update profile details",err)
            setProfileDetailsInEdit(profileDetails);
        });
        setIsEditProfile(false);
    };

    useEffect(()=>{
        getUserProfileDetails()
            .then(({ data }) => {
                console.log(data);
                setProfileDetails(data);
                setProfileDetailsInEdit(data);
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log('something went wrong - unable to get User Profile Details : ', err);
            });
    },[]);

    useEffect(() => {
        if (profileDetails?.id) {
            GetProfilePicture(profileDetails.id).then((response)=>{
                setSelectedFile(response.request.responseURL);
            });
        }
    }, [profileDetails]);

    return (
        <MainProfileContainer>
            <PageDescription>Profile</PageDescription>
            <ProfileWrapper>
                <ProfileUploadContainer>
                    <CenterAlign style={{}}>
                        <ProfileUpload src={selectedFile}/>
                        <input id="file-input" type="file" style={{display:'none'}} accept=".jpg,.jpeg,.png,.webp,.svg" onChange={onUploadProfilePicture}/>
                        <ImageLabel for='file-input'>
                            <ProfileUploadIcon src={ProfilePicUploadIcon}/>
                        </ImageLabel>
                    </CenterAlign>
                    <UserName>{profileDetails.name}</UserName>
                    <UserNameTag>@{profileDetails.username}</UserNameTag>
                </ProfileUploadContainer>
                <If condition={isEditProfile}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <ProfileEditContainer userDetails={profileDetailsInEdit} onProfileEdit={(key,value)=>{
                            if(key==='name'){
                                setProfileDetailsInEdit({...profileDetailsInEdit,name:value});
                                return;
                            }
                            if(key==='username'){
                                setProfileDetailsInEdit({...profileDetailsInEdit,username:value});
                                return;
                            }
                            if(key==='about'){
                                setProfileDetailsInEdit({...profileDetailsInEdit,about:value});
                                return;
                            }
                            if(key==='twitter_url'){
                                setProfileDetailsInEdit({...profileDetailsInEdit,twitter_url:value});
                                return;
                            }
                            if(key==='facebook_url'){
                                setProfileDetailsInEdit({...profileDetailsInEdit,facebook_url:value});
                                return;
                            }
                            if(key==='linked_in_url'){
                                setProfileDetailsInEdit({...profileDetailsInEdit,linked_in_url:value});
                            }
                        }}/>
                        <CenterAlign>
                            <SaveButton onClick={onSaveProfile}>
                                <SaveLabel>Save</SaveLabel>
                            </SaveButton>
                        </CenterAlign>
                    </div>
                    <Else />
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <ProfileDisplayContainer userDetails={profileDetails}/>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'40px',marginBottom:'102px',marginLeft:'118px'}}>
                            <LinkStyle style={{color:'#FA163F'}} onClick={onEditProfile}>Edit Profile</LinkStyle>
                            <LinkStyle style={{color:'#E36208'}}>Log out</LinkStyle>
                        </div>
                    </div>
                </If>
            </ProfileWrapper>
        </MainProfileContainer>
    );
};
UserProfilePage.propTypes = {
    custom: PropTypes.string.isRequired,
};

export default UserProfilePage;
