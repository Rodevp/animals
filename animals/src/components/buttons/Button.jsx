import { Button, ButtonValue } from './styles.js';

const iconAlignmentPossibilities = ['left', 'right'];

export const ButtonComponent = ({ Icon, value, iconAlignment = 'left' }) => {
  const alignment = iconAlignmentPossibilities.find((align) => align === iconAlignment);

  if (!alignment) throw new Error('Error en la alineación del icono');

  return (
    <Button iconAlignment={iconAlignment}>
      <i>{Icon}</i>
      {value && <ButtonValue>{value}</ButtonValue>}
    </Button>
  );
};
