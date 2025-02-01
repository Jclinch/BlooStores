// path : components/FavoriteInitializer.tsx

"use client"

import { useFavoriteStore } from "@/store/favoriteStore"
import { useEffect } from "react"

export default function FavoriteInitializer() {
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites")
        if (storedFavorites) {
            useFavoriteStore.setState({ favorites: JSON.parse(storedFavorites) })
        }
    }, [])

    return null // No UI, just runs the effect
    }