import React, { createContext } from 'react'

const TabContext = createContext<any>(null)

export default function Tabs({ children, defaultTab }: { children: React.ReactNode, defaultTab: string }) {
    const [activeTab, setActiveTab] = React.useState(defaultTab)
    const contextValue = {
        activeTab,
        setActiveTab,
    }

    return (
        <TabContext.Provider value={contextValue}>
            {children}
        </TabContext.Provider>
    )
}

Tabs.list = function TabList({ children }: { children: React.ReactNode }) {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>
}

Tabs.Tab = function Tab({ children, id }: { children: React.ReactNode, id: string }) {
    const { setActiveTab } = React.useContext(TabContext)
    return <button style={{ margin: '0 10px' }} onClick={() => setActiveTab(id)}>{children}</button>
}

Tabs.Panel = function TabPanel({ children, id }: { children: React.ReactNode, id: string }) {
    const { activeTab } = React.useContext(TabContext)
    return <div style={{ display: "flex", justifyContent: "center" }}>
        {activeTab === id ? children : null}
    </div>
}