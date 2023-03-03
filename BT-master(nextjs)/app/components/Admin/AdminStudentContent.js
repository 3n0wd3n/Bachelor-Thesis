import React from 'react'
import { Colors } from '../../utils/Colors'
import { FaAngleDown } from 'react-icons/fa'
import { StudentContainer, DropDown, MenuItems, MenuItem, ContentContainer } from './AdminStudentContent.style'
import { FontsThin } from '../CommonStyles'
import FilesContent from './ContentOfStudent/FilesContent'
import HomeworksContent from './ContentOfStudent/HomeworksContent'
import LessonChange from './ContentOfStudent/LessonChange'

export default function AdminStudentContent({ student, setData }) {
    const [state, setState] = React.useState(false);
    const styleAngleDown = { color: Colors.lightGreen, fontSize: "2.3em", transform: `rotate(${state ? 180 : 0}deg)` };
    const menuItems = React.useMemo(() =>
      [
        {
          title: 'info/edit',
          component: <FilesContent setData={setData} student={student} />
        },
        {
          title: 'lessons change',
          component: <LessonChange student={student} />
        },
        {
          title: 'files',
          component: <>b</>
        },
        {
          title: 'homeworks',
          component: <HomeworksContent student={student} />
        },
        {
          title: 'lesson summary',
          component: <>d</>
        },
      ]
    , [student])
    const [selectedMenu, setSelectedMenu] = React.useState(menuItems[0]);

    return (
        <>
            <StudentContainer onClick={() => setState(state => !state)}>
                <FontsThin>
                    {student.firstName} {student.lastName}
                </FontsThin>
                <FaAngleDown style={styleAngleDown}></FaAngleDown>
            </StudentContainer>
            {
                state
                &&
                <DropDown>
                    <MenuItems>
                        {menuItems.map((menuItem, key) =>
                            <MenuItem
                              key={key}
                              selected={menuItem.title === selectedMenu.title}
                              onClick={() => setSelectedMenu(menuItem)}>{menuItem.title}
                            </MenuItem>
                        )}
                    </MenuItems>
                    <ContentContainer>
                      {selectedMenu.component}
                    </ContentContainer>
                </DropDown>
            }
        </>
    )
}
