import React, { useState, useEffect } from 'react';

const ToDoListing = () => {
    // State variables
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    // Fetch initial data
    useEffect(() => {
        fetchTodos();
    }, []);

    // Fetch todos from an API
    const fetchTodos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
            const todos = await response.json();
            setTasks(todos);
            setIsLoading(false);
        } catch (error) {
            console.log('Error fetching todos:', error);
            setIsLoading(false);
        }
    };

    // Handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Add a new task
    const handleAddTask = async () => {
        if (inputValue.trim() === '') {
            return;
        }

        const newTask = {
            title: inputValue,
            completed: false
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(newTask),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const addedTask = await response.json();
            setTasks((prevTasks) => [...prevTasks, addedTask]);
            setInputValue('');
        } catch (error) {
            console.log('Error adding task:', error);
        }
    };

    // Handle checkbox change for a task
    const handleTaskCheckboxChange = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Delete a task
    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };


    // Handle filter change
    const handleFilterChange = (filterType) => {
        setFilter(filterType);
    };

    // Filter tasks based on the selected filter
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'uncompleted') {
            return !task.completed;
        }
        return true;
    });

    // Display loading message while data is being fetched
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Render the todo list
    return (
        <>
            <div className="bg-gray-400 w-full mw-full py-3 rounded px-4 h-24 flex items-center justify-center mx-4 shadow-lg">
                <input
                    type="text"
                    className="add-task py-2 px-4 rounded mr-4 md:w-1/2 w-full"
                    id="add"
                    placeholder="Add your todo"
                    autoFocus
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button id="btn" onClick={handleAddTask} className='bg-blue-500 text-white font-bold text-md py-2 px-4 rounded hover:bg-blue-700'>
                    Add
                </button>
            </div>
            <div className="filters px-4 flex flex-wrap justify-between items-center w-full mt-4 p-2">
                <div className="flex flex-wrap">
                    <a href="#" className='bg-blue-500 text-white font-bold  text-sm py-2 px-4 rounded hover:bg-blue-700' onClick={() => handleFilterChange('all')}>
                        All
                    </a>
                    <a href="#" className='bg-blue-500 text-white font-bold  text-sm py-2 px-4 rounded hover:bg-blue-700 mx-4' onClick={() => handleFilterChange('uncompleted')}>
                        Uncompleted
                    </a>
                    <a href="#" className='bg-blue-500 text-white font-bold  text-sm py-2 px-4 rounded hover:bg-blue-700' onClick={() => handleFilterChange('completed')}>
                        Completed
                    </a>
                </div>
                <div className="completed-task flex flex-wrap items-center md:mt-0 mt-2">
                    <p className='text-blue-600'>
                        Completed Tasks: <span id="c-count" className='font-bold text-md text-blue-700'>{tasks.filter((task) => task.completed).length}</span>
                    </p>
                    <p className='text-blue-600 ml-4'>
                        Total Tasks: <span id="tasks-counter" className='font-bold text-md text-blue-700'>{tasks.length}</span>
                    </p>
                </div>
            </div>
            <ul id="list" className='flex flex-wrap w-full mx-full'>
                {filteredTasks.map((task) => (
                    <li key={task.id} className='md:basis-1/2 shrink-0 grow-0 basis-full'>
                        <div className='bg-white rounded-lg p-4 m-4 shadow-lg'>

                            <label data-ripple-dark="true" htmlFor={`task-${task.id}`} className='font-medium text-lg text-gray-600 relative flex items-center p-3 ps-0 rounded-full cursor-pointer'>
                                <input type="checkbox"
                                    id={`task-${task.id}`}
                                    checked={task.completed}
                                    onChange={() => handleTaskCheckboxChange(task.id)}
                                    data-id={task.id}
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 mr-2" />
                                <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none left-1 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                {task.title}
                            </label>
                            <div>
                                <button

                                    className="bg-blue-500 text-white font-bold text-md py-2 px-4 rounded hover:bg-blue-700 mt-2"
                                    data-id={task.id}
                                    onClick={() => handleDeleteTask(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDoListing;
