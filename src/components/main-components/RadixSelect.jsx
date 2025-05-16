import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';

export default function RadixSelect({ options, value, onValueChange }) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="md:p-2 p-1 text-left border w-full rounded md:w-90 flex justify-between items-center bg-gray-100 dark:bg-gray-800  dark:text-white focus:outline-none outline-none focus:border-blue-500">
        <Select.Value placeholder="Выбрать" />
        <ChevronDownIcon className="w-5 h-5" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="bg-white dark:bg-gray-800 border rounded shadow-lg fixed z-500">
          <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="md:p-2 p-1 flex items-center justify-between cursor-pointer hover:bg-gray-600 hover:text-white transition rounded outline-none"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="w-4 h-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
