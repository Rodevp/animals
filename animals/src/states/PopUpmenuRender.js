import { atom, Provider, useAtom } from 'jotai';
import { HeaderComponent, PopupMenu } from '../components';
const PopUpRender = atom(false);

export function HeaderDisplay() {
  return (
    <Provider initialValues={[[PopUpRender]]}>
      <HeaderComponent />
      <PopupMenu />
    </Provider>
  );
}
