import React, { createContext, useContext, useState } from 'react';

// Create context to hold state shared between compound components
const TabsContext = createContext<any>(null);

interface TabsProps {
    defaultTab?: string;
    children: React.ReactNode;
}

const Tabs = ({ defaultTab, children }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const contextValue = {
        activeTab,
        setActiveTab,
    };

    return (
        <TabsContext.Provider value={contextValue}>
            <div>{children}</div>
        </TabsContext.Provider>
    );
};

// Tab List to wrap Tab elements
interface TabListProps {
    children: React.ReactNode;
}

const TabList = ({ children }: TabListProps) => {
    return <div className="tab-list">{children}</div>;
};

// Individual Tab to switch between views
interface TabProps {
    name: string;
    children: React.ReactNode;
}

const Tab = ({ name, children }: TabProps) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);

    return (
        <button
            className={`tab ${activeTab === name ? 'active' : ''}`}
            onClick={() => setActiveTab(name)}
        >
            {children}
        </button>
    );
};

// Tab Panel to render content based on the active tab
interface TabPanelProps {
    name: string;
    children: React.ReactNode;
}

const TabPanel = ({ name, children }: TabPanelProps) => {
    const { activeTab } = useContext(TabsContext);

    return activeTab === name ? <div className="tab-panel">{children}</div> : null;
};

// Exporting components for use
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
