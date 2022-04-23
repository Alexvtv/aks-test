import type {NextApiRequest, NextApiResponse} from 'next'
import {FolderT} from '../../type'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<FolderT>
) {
    res.status(200).json({
        "caption": "First level",
        child: [
            {
                "caption": "Second level",
                child: [
                    {
                        "caption": "Third level",
                        child: [
                            {
                                "caption": "My documente"
                            },
                            {
                                "caption": "My documente"
                            }
                        ]
                    }
                ]
            }
        ]
    })
}
