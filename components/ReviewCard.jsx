function ReviewCard({review}) {
    
    const { name, vote, text} = review;
    
    return (
        <div className="border m-2">
            <div>
                <p>{text}</p>
            </div>
            <div>
                <strong>Voto: {vote}</strong>
            </div>
            <div>
                By  {name}
            </div>
        </div>
    )
}

export default ReviewCard