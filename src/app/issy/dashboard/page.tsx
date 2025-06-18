"use client";
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/issy/ui/card";
import Wavetable  from "@/components/issy/Wavetable";
import Tooltip  from "@/components/issy/Tooltip";
import "@/app/globals.css"
export default function DashboardPage() {
  return (
    
    <div>
      {/* Wavetable */}
      <Card>
        <CardContent>
          <Wavetable/>
        </CardContent>
      </Card>

      {/* ツールチップ */}
      <Card>
        <CardHeader>ツールチップ</CardHeader>
        <CardContent>
          <Tooltip/>
        </CardContent>
      </Card>
    </div>
  );
}
