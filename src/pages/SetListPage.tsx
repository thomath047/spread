// Core
import { useEffect, useState } from "react";

// Components
import TableRow from "../components/TableRow";
import Page from "../components/Page";

// Others
import { getSets, Set } from "../api/Client";
import useDebounce from "src/hooks/useDebounce";

export default function SetListPage() {
    const [sets, setSets] = useState<Set[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const debouncedQuery = useDebounce(searchQuery, 500);

    const fetchList = () => {
        getSets(debouncedQuery).then(setSets)
    }

    useEffect(function () {
        fetchList();
    }, [debouncedQuery])

    return (
        <Page>
            <div>
                <input className="focus:ring-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full border rounded-md shadow mb-4 px-2 py-1 sm:text-sm border-gray-300"
                    placeholder="Search"
                    onChange={(event) => setSearchQuery(event.currentTarget.value)}
                    value={searchQuery} />
            </div>

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