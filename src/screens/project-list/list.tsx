import React from "react";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
}
interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface listProps {
  list: Project[];
  users: User[];
}
export const List = ({ users, list }: listProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(
          (project: {
            id: React.Key | null | undefined;
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            personId: any;
          }) => {
            return (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>
                  {users.find((user: { id: any }) => {
                    return user.id === project.personId;
                  })?.name || "未知错误"}
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
