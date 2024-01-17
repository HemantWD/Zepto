import { useState } from "react";

const Chip = () => {
  const [value, setValue] = useState("");
  const [chip, setChip] = useState([]);
  const [items, setItems] = useState([
    "Marina Augustine",
    "Nick Giannopoulous",
    "Anita Gros",
    "Megan Smits",
    "Naryan Gamer",
  ]);

  function handleSelect(item) {
    setChip([...chip, item]);
    setItems(items.filter((e) => e !== item));
    setValue("");
  }

  function handleDelete(x) {
    setChip(chip.filter((e) => e !== x));
    setItems([...items, x]);
  }

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <div className="container w-96">
      <div className="box p-4 bg-gray-100">
        <div className="flex flex-wrap gap-2">
          {chip.map((chip, index) => (
            <div key={index} className="bg-gray-400 text-white p-2 rounded">
              {chip}
              <span
                className=" ml-2 cursor-pointer"
                onClick={() => handleDelete(chip)}
              >
                X
              </span>
            </div>
          ))}
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Add New User"
            className="border rounded p-2 focus:outline-none "
          />
        </div>
        {value && (
          <div className="mt-4">
            {items
              .filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer p-2 rounded hover:bg-red-200"
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chip;
