// Core
import { useEffect, useState } from "react";

// Components
import TableRow from "../components/TableRow";
import Page from "../components/Page";

// Others
import { getFavorites, Set } from "../api/Client";

export default function FavoriteListPage() {
    const [sets, setSets] = useState<Set[]>([]);

    const fetchList = () => {
        getFavorites().then(setSets)
    }

    useEffect(function () {
        fetchList();
    }, [])

    return (
        <Page>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                set id
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                set name
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                year
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                number parts
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                theme id
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                theme name
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sets.map(function (set) {
                            return <TableRow key={set.setId} set={set} fetchList={fetchList} />
                        })}
                    </tbody>
                </table>
            </div>
        </Page>
    )
}