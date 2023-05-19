import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const options = {
    title: "Seguidores de Usuarios",
    chartArea: { width: "50%" },
    hAxis: { title: "Usuarios" },
    vAxis: { title: "Seguidores" },
};

const Charts = ({ userInf }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = userInf.map((element) =>
                    fetch(element.followers_url)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log("userInf.followers_url: ", element.login, data.length);
                            return {
                                ...element,
                                followers: data.length,
                            };
                        })
                );

                const results = await Promise.all(promises);
                const mappedData = results.map((user) => [user.login, user.followers]);

                setChartData([["Usuario", "Seguidores"], ...mappedData]);
            } catch (error) {
                console.error("Error fetching user followers:", error);
            }
        };

        fetchData();
    }, [userInf]);

    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={chartData}
            options={options}
        />
    );
};

export default Charts;
