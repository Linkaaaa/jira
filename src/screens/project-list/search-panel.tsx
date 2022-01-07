import React from "react";
interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface SearchPancelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPancelProps["param"]) => void;
}
export const SearchPanel = ({ users, param, setParam }: SearchPancelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="请输入名称"
          name="name"
          value={param.name}
          onChange={(evt) => {
            setParam({ ...param, name: evt.target.value });
          }}
        />
        <select
          value={param.personId}
          onChange={(ev) => {
            setParam({
              ...param,
              personId: ev.target.value,
            });
          }}
        >
          <option value="">负责人</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};
