import React from 'react'
import EmailRow from "./EmailRow"

import Section from "./Section"
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';





import { Checkbox,IconButton} from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';

import "./EmailList.css"

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                 <div className="emailList__settingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                 </div>
                <div className="emailList__settingsRight">
                  <IconButton>
                     <ChevronLeftIcon />
                  </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>

                    <IconButton>
                       <SettingsIcon />
                    </IconButton>

                </div>
            </div>
                <div className="emailList__sections">
                   <Section Icon={InboxIcon} title="Primery" color="red" selected />
                   <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                   <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
                </div>
             <div className="emailList__list">
                  <EmailRow 
                  title="Twitch"
                  subject="Hey follow streamer!!!"
                  description="This is a test"
                  time= "10pm"
                  />
                  <EmailRow 
                  title="Twitch"
                  subject="This "
                  description=""
                  time= "10pm"
                  />

             </div>
            
        </div>
    )
}

export default EmailList
