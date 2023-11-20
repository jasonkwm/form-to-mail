import { useRouter } from "next/router";
import users from "@/users.config";
import { Button, Typography, Box, Paper } from "@mui/material";
import { Image } from "@mui/icons-material";

export default function UserDetails() {
    console.log(users);
    const router = useRouter();
    const userId = router.query.userId;
    return (
        <Paper>
            <Image></Image>
        </Paper>
    );
}
