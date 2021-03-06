import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../models/Product";
import { Link } from "react-router-dom";
type Props = {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <Card key={product.id}>
            <CardHeader
                avatar={
                    <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'primary.main' } }}
            />
            <CardMedia
                sx={{ height: 200, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                component='img'
                image={product.pictureUrl}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color='secondary'>
                    ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`} >View</Button>
            </CardActions>
        </Card>
    )
}