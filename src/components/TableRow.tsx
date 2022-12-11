import { addFavorite, deleteFavorite, Set } from "../api/Client";


interface TableRowProps {
    set: Set,
    fetchList: () => void
}

export default function TableRow(props: TableRowProps) {
    const { set: {
        setId,
        setName,
        year,
        numParts,
        themeId,
        themeName,
        isFavorite
        ,
    },
        fetchList } = props;

    const onClickHandler = (id: string) => async () => {
        const res = isFavorite ? await deleteFavorite(id) : await addFavorite(id)
        if ([201, 200].includes(res)) fetchList();
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {setId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {setName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {year}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {numParts}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {themeId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {themeName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button onClick={onClickHandler(setId)} className={`${isFavorite ? "hover:bg-red-500 text-red-700 border-red-500" : "hover:bg-green-500 text-green-700 border-green-500"} bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded`}>
                    <span>{isFavorite ? "Unfavorite" : "Mark as Favorite"}</span>
                </button>
            </td>
        </tr >
    )
}